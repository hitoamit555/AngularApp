import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  AppComponent()
  {
    //this.Employee=

  }
  ngOnInit()
  {
   // this.Employee=Employee;
  }
  title = 'AngularApp';
 // Employee=['anmnmn','xyz'];
 emp: Employee=new Employee(1,"",true,new Date);
}
