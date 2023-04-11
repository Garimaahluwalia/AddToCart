import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Idetails, IProducts } from 'src/app/interface';
import { CartService } from 'src/app/services/cart.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {
  public details_product!: IProducts;
  public product_id: any;
  public isProductExistsInCart: boolean = false;
  public selectedImage!: string;
  public inputnumber = 0;


  constructor(public apiservice: ApiService, public router: Router, public route: ActivatedRoute, public cartservice: CartService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product_id = params.get("productId");
      this.getidofproductdetails();
    });
  }

  addproduct() {
    this.cartservice.addToCart(this.product_id, this.details_product)
    this.isProductExistsInCart = this.cartservice.checkIfProductExistsInCart(parseInt(this.product_id));
  }

  removeProduct() {
    this.cartservice.removeItem(this.product_id, this.details_product)
    this.isProductExistsInCart = this.cartservice.checkIfProductExistsInCart(parseInt(this.product_id));
  }

  getidofproductdetails() {
    this.apiservice.getProductById(this.product_id).subscribe((data: IProducts) => {
      this.isProductExistsInCart = this.cartservice.checkIfProductExistsInCart(parseInt(this.product_id));
      this.details_product = data;
      this.selectedImage = data.thumbnail;
    });

  }

  // plus() {
  //   this.inputnumber = this.inputnumber++;
  // }


  // minus() {
  //   if (this.inputnumber != 0) {
  //     this.inputnumber = this.inputnumber - 1;
  //   }
  // }

}

