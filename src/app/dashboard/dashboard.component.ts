import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public msg;

  // @Output() msgevent
  constructor() { }

  ngOnInit() {
  }

  onDashboard(){}
}
