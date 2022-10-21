import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {EmailService} from "../../services/email.service";
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') form: NgForm | undefined;
  name: any;
  email: any;
  message: any;

  user: { name: string; email: string; message: string; } | undefined;
  isSuccess = false;
  errorMessage = null;

  constructor(private userService: UsersService, private emailService: EmailService) {
  }

  ngOnInit() {
  }

  sendMessage(user: { fname: string, email: string, message: string }){
    this.emailService.sendToMail(user);
    this.form.reset();
  }
  options: AnimationOptions = {
    path: '/assets/feedback.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
