import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  myObject = {
    gender:'female',
    age: 33,
    location:'Egypt'
  }

  myArr: Array<string> = ['him', 'her', 'yours'];

  angularLogo:string = "https://angular.io/assets/images/logos/angular/angular.svg";

  buttonStatus = true;
  
  constructor() { }

  ngOnInit() {
  }


}
