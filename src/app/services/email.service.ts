import {Injectable} from "@angular/core";
import emailjs from '@emailjs/browser';

@Injectable()
export  class EmailService{
constructor() {
}

sendToMail(user) {
  let templateParams = {
    from_name: user.fname,
    to_name: 'Rijil Raj',
    message: user.message,
    email_id: user.email
  };
  emailjs.send('service_y0ebg0h', 'template_aos15uc', templateParams, 'PVOUbb1e0fc7ilxiR').then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log('FAILED...', err);
  });
}
}
