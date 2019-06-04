import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskAppNew';
  public router:any;

  public incomingarray = [];
  public filterData:any = [];
  public customerDetailarray:any = [];

  constructor(private _router: Router, ){
      
  }

  ngOnInit(){
    
    var previosdata = 
    this.incomingarray;
    // this.filterData;
  }
}
