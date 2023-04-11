import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private CartItems: IProducts[] = []


  public AddtoCartEvent = new BehaviorSubject<number>(0);
  public refreshCartItems: EventEmitter<any> = new EventEmitter();
  removedData: any;
  constructor() {
    this.refreshCartItems.subscribe(({ event_name }) => {
      if (event_name == 'remove') {
        this.getSubTotalAmount();
      }
    })
  }




  getCartItems() {
    return this.CartItems
  }


  getSubTotalAmount() {
    return this.CartItems.reduce((Subtotal, Items) => {
      return Subtotal + Items.price - (Items.price / 100 * Items.discountPercentage) * Items.quantity;
    }, 0);
  }

  clearCart(cartItems: IProducts) {
    this.CartItems = []
  }

  // addProduct( product: IProducts) {
  //   this.CartItems.push(product);
  //   this.AddtoCartEvent.next(this.CartItems.length);
  // }
  addToCart(productId: number, addedItem: IProducts) {
    this.CartItems.push({ ...addedItem, quantity: 1 });
  }


  updateQuatity(quantity: number, index: number) {
    this.CartItems[index].quantity = quantity;
    /* this.cartservice.CartItems = this.cartItems;
    this.subTotalAmount = this.cartservice.getSubTotalAmount(); */
  }

  getProduct() {
    return this.CartItems;
  }


  checkIfProductExistsInCart(productId: number): boolean {
    let v = this.CartItems.find(v => v.id === productId)
    // console.log(v, !v, !!v, this.CartProduct, !null, !undefined, !true)
    return !!v
  }

  itemInCart(cartItems: any): boolean {
    return this.CartItems.findIndex((o) => o.id === cartItems.id) > -1
  }


  removeItem(productid: number, product: IProducts) {
    if (this.CartItems !== null) {
      const index = this.CartItems.findIndex(v => v.id == productid)
      this.CartItems.splice(index, 1)
    }
    this.AddtoCartEvent.next(this.CartItems.length)
  }



}




