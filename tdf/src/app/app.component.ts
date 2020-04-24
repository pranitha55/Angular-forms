import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Prani', 'Prani@gmail.com', 9984787767, '', 'morning',true);
}
onsubmit(userForm) {
  console.log(userForm);
  
  
}