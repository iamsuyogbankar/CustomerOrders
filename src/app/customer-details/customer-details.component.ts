import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShareService } from '../share.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
public customers = [];
public filterData:any = [];
public customerId;
@Output() filtermessage = new EventEmitter();

  constructor(private activeRoute: ActivatedRoute, 
    private shareService: ShareService) {}

ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    // const routeParams = this.activeRoute.snapshot.params;
    
    // const routeParams = this.activeRoute.snapshot.paramMap.get('id');
    
    // const routeParams = this.activeRoute.params.subscribe(m => m.id);
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.customerId  = parseInt(params.get('id'));
      // this.customerId = id;
    });

    var customerData = this.shareService.customerData()
    .subscribe(data => {
      this.customers = data
      console.log(this.customerId)
      this.filterData = this.customers.filter(fill => fill.id == this.customerId)
      console.log(this.filterData)    
    });

    
  }
  
  onCustomerDetails(){
    this.filtermessage.emit(this.filterData);
  }
}
