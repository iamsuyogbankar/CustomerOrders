import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddnewCustomersComponent } from './addnew-customers/addnew-customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DetailsComponent } from './details/details.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
// const routes: Routes = [  
//   {path: "customer-list", component: CustomerListComponent},
//   {path: "order/:id", component: OrderComponent},
//   {path: "order-details/:id", component: OrderDetailsComponent},
//   {path: "addnew-customers", component: AddnewCustomersComponent},
//   {path: "customer-details/:id", component: CustomerDetailsComponent},
//   {path: "details/:id", component: DetailsComponent},
//   {path: "**", component: CustomerListComponent}
// ];

const routes: Routes = [  
  // {path: "customer-list", component: CustomerListComponent},
  // {path: "order/:id", component: OrderComponent},
  // {path: "order-details/:id", component: OrderDetailsComponent},
  // {path: "addnew-customers", component: AddnewCustomersComponent},
  // {path: "customer-details/:id", component: CustomerDetailsComponent},
  // {path: "details/:id", component: DetailsComponent},
  {path: "demo", component: DemoComponent},
  {path: "demo2", component: Demo2Component},
  // {path: "**", component: CustomerListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
