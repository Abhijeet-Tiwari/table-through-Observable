import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs/RX';
import {EmployeeService} from '../services/employee.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
 
})
export class TableComponent implements OnInit {
  data:any;
  subscription:Subscription;
  constructor(private empservice: EmployeeService) {
    console.log("TableComponent.data:");
    this.subscription = this.empservice.getData().subscribe(data => {this.data=data});
   }
  ngOnInit() {}
}
