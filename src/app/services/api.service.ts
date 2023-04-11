import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idetails, IProducts } from '../interface';
import { finalize, Observable, of, share, tap } from 'rxjs'
import { environment } from 'src/environments/environment.development';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cache: any;
  private cachedObservable!: Observable<any>;


  constructor(private httpClient: HttpClient, public router: Router, public route: ActivatedRoute) { }
  private producturl = environment.Productapiurl


  getProduct(): Observable<any> {
    let Observable: Observable<any>
    if (this.cache) {
      Observable = of(this.cache)
    } else if (this.cachedObservable) {
      Observable = this.cachedObservable
    } else {
      this.cachedObservable = this.httpClient.get<any>(this.producturl).pipe(tap(res => this.cache = res),
        share(),
        finalize(() => this.cachedObservable)
      );
      Observable = this.cachedObservable
    }
    return Observable;

  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get<IProducts>('https://dummyjson.com/products/' + id)
  }

}


