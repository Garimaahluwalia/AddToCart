import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Idetails } from '../../interface';


@Component({
  selector: 'app-posts',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public math!: Math;
  public product_data: any;
  public starRating: number = 0;

  constructor(public router: Router, public apiservice: ApiService) {}
  ngOnInit(): void {
    this.apiservice.getProduct().subscribe((data: Idetails) => {
      this.product_data = data.products
      // console.log(data)
    })

  }

}
