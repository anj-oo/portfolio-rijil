import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {Feedback} from "../../model/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };
  @ViewChild('myForm')  form: NgForm | undefined;
  name: any;
  email: any;
  message: any;
  gender = [
    {id:1, value: 'Male'},
    {id:2, value: 'Female'},
    {id:3, value: 'Other'}
  ]
  defaultGender= 'Male';
  user: { name: string; email: string; message: string; } | undefined;
  feedback: Feedback[]

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  onSubmit() {
    this.user = this.form?.control.value;
    const headers = new HttpHeaders({user:'rijil'})
    this.http.post
     ('https://portfoliorijil-default-rtdb.firebaseio.com/user.json',
      this.user, {headers:headers})
      .subscribe((res)=>{
        console.log(res);
      });
  }

  private fetchUserData(){
    this.http.get('https://portfoliorijil-default-rtdb.firebaseio.com/user.json').
    pipe(map((res: {// @ts-ignore
      [key:string], Feedback})=> {
      const users=[];
      for (const key in res){
        if(res.hasOwnProperty(key)) {
          users.push({...res[key], id: key});
        }
      }
      return users;
    })).
    subscribe((res)=>{
      console.log(res);
    })
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
