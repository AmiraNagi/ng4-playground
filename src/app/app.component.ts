import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleClass = 'red-title';
  titleClasses = {
    'red-title':true,
    'large-title': true
  };
  myEvent(event){
    console.log(event);
  }

}
