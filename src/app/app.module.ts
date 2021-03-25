import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPageComponent } from './components/views/product-page/product-page.component';
import { ProductComponent } from './components/views/product-page/product/product.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { CartPageComponent } from './components/views/cart-page/cart-page.component';
import { LoginComponent } from './components/views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductPageComponent,
    ProductComponent,
    BottomBarComponent,
    CartPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
