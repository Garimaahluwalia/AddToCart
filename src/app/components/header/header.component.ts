import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public count: number = 0
  public details_product!: IProducts;
  public product_id: any;

  constructor(public cartservice: CartService) { }
  ngOnInit() {
    this.cartservice.AddtoCartEvent.subscribe(number =>
      this.count = number)


  }




}
