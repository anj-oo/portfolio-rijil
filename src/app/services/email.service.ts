import {Injectable} from "@angular/core";
import emailjs from '@emailjs/browser';
import {NgxSpinnerService} from "ngx-spinner";

@Injectable()
export class EmailService {
  constructor(private spinner: NgxSpinnerService) {
  }

  sendToMail(user) {
    let templateParams = {
      from_name: user.fname,
      to_name: 'Rijil Raj',
      message: user.message,
      email_id: user.email
    };
    this.spinner.show();
    emailjs.send('service_y0ebg0h', 'template_aos15uc', templateParams, 'PVOUbb1e0fc7ilxiR').then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setTimeout(() => {
        this.spinner.hide();
      }, 2000)
      alert('Message sent success!! Thank You!!');

    }, (err) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
      alert('Something Went Wrong try Again!!');
      console.log('FAILED...', err);
    });
  }
}
