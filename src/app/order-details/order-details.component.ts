import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  public orderDetails = [];
  public filterData = [];
  public orderId;
  constructor(private shareService: ShareService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    // const routeParams = this.activeRoute.snapshot.params;
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.orderId  = parseInt(params.get('id'));
    // var orderId = routeParams.id;
  });
    // var orderId = routeParams.id;

    var curOrder = this.shareService.orderData()
    .subscribe(data =>{ 
      this.orderDetails = data
      this.filterData = this.orderDetails.filter(fill => fill.id == this.orderId)
      console.log(this.filterData)
    });
  }

}
