import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { IProducts } from 'src/app/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  public increaseAmount:any;
  public details_product!: IProducts;
  public product_id: any;
  subTotalItems: any;

  // @Input() inputnumber: number = 1;
  // @Output() updateQuatity: EventEmitter<number> = new EventEmitter<number>();
  constructor(public cartservice: CartService) { }
  ngOnInit(): void {

  }

  // plus() {
  //   const total = this.cartservice.getSubTotalAmount();
  //    this.increaseAmount=(this.inputnumber)  * (total)
  //   this.inputnumber = this.inputnumber + 1 ;
  //   this.updateQuatity.emit(this.inputnumber);
  // }
  
  // minus() {
  //   if (this.inputnumber != 0) {
  //     this.inputnumber = this.inputnumber - 1 ;
  //     this.updateQuatity.emit(this.inputnumber);
  //   }
  // }
 

}


