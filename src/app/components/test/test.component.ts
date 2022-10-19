import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Users} from "../../model/users";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  @ViewChild('myForm') form: NgForm | undefined;
  name: any;
  email: any;
  message: any;
  gender = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'},
    {id: 3, value: 'Other'}
  ]
  defaultGender = 'Male';
  user: { name: string; email: string; message: string; } | undefined;
  userAdded: Users[]
  isFetching = false;
  editMode = false
  currentUserId: string
  errorMessage = null;
  errorSub: Subscription;
  response: Subscription;

  constructor(private userService: UsersService, private emailService: EmailService) {
  }

  ngOnInit() {

    this.fetchUserData();
    this.errorSub = this.userService.error.subscribe((errMessage) => this.errorMessage = errMessage);
  }

  // onSubmit() {
  //   this.user = this.form?.control.value;
  //  this.onUserCreate(this.user);
  //   this.form.reset();
  // }

  sendMessage(user: { fname: string, email: string, message: string }){
    this.isFetching = true;
    this.emailService.sendToMail(user);
    this.isFetching = false;
    this.form.reset();
  }

  onUserCreate(user: { fname: string, email: string, message: string }) {
    if (!this.editMode) {
      this.userService.addUser(this.form?.control.value);
    } else {
      this.userService.updateUser(this.currentUserId, user)
    }
    this.form.reset();
  }

  private fetchUserData() {
    this.isFetching = true;
    this.userService.fetchUserDetails().subscribe((users: Users[]) => {
      console.log(users);
      this.userAdded = users;
      this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;
      // alert(this.errorMessage);
    })
  }

  onDeleteUser(id: string) {
    this.userService.deleteUser(id);
  }

  onEdit(id: string) {
    this.editMode = true
    this.currentUserId = id;
    let currentUser = this.userAdded.find((p) => {
      return p.id === id
    });
    console.log(currentUser);
    this.form.setValue({
      fname: currentUser.fname,
      email: currentUser.email,
      message: currentUser.message,
    });

  }

  ngOnDestroy():void {
    this.errorSub.unsubscribe();
  }

  setDefaultValue() {
    //SET VALUES
    // this.form?.setValue({
    //   fname: 'Ann',
    //   email: 'kvanju.kannur@gmail.com',
    //   message:'Hlooooo',
    //   gender:'Female'
    // });
    //PATCH VALUES
    this.form?.form.patchValue({
      fname: 'Ann',

    });
  }


}
