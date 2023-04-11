import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailpageComponent } from './components/productdetailpage/productdetailpage.component';
import { QuantityComponent } from './components/quantity/quantity.component';

const routes: Routes = [
  
  {
    path: "products", component: MainLayoutComponent,
    children: [
      {
        path: "", component: ProductComponent
      },
      {
        path: "productdetails/:productId", component: ProductdetailpageComponent
      },
      {
        path:"cart" , component : CartComponent
      },
      
    ]
  },
  {
    path: "", redirectTo: "/products", pathMatch: "full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
