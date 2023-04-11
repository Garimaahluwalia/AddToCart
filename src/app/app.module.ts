import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductdetailpageComponent } from './components/productdetailpage/productdetailpage.component';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { QuantityComponent } from './components/quantity/quantity.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ProductdetailpageComponent,
    CartComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PhotoGalleryModule,
    NgbModule,
   
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
