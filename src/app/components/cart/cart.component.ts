import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { QuantityComponent } from '../quantity/quantity.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems: any[] = [];
  clear: any[] | undefined;
  public qtyTotal: number = 0;
  public subTotalAmount: number = 0;
  public subTotalAmountQuantity: any;
  @ViewChild(QuantityComponent, { static: true }) quantityComponent: QuantityComponent | undefined;

  @ViewChildren('subTotalWrap')
  subTotalItems!: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing!: QueryList<ElementRef>;

  constructor(public cartservice: CartService, public route: Router, public router: ActivatedRoute, public currencyPipe: CurrencyPipe) { }
  ngOnInit() {

    this.cartItems = this.cartservice.getCartItems()
    console.log(this.cartItems);
    this.subTotalAmount = this.cartservice.getSubTotalAmount();

  }
  changeSubtotal(cartproducts: any, i: any) {
    const qty = cartproducts.qtyTotal;
    const amount = cartproducts.price;
    const subTotal = amount * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, 'USD');
  }


  clearCart() {
    this.cartItems.splice(0)
    this.subTotalAmount = this.cartservice.getSubTotalAmount();


  }

  removeCartItem(i: any) {
    this.cartItems.splice(i, 1);
    // this.cartservice.refreshCartItems.emit({event_name:"remove"});

    this.subTotalAmount = this.cartservice.getSubTotalAmount();

  }

  updateQuatity(quantity: number, index: number){
    this.cartservice.updateQuatity(quantity, index);
    this.subTotalAmount = this.cartservice.getSubTotalAmount();
  }


}
