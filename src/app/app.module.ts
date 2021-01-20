import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { ProductComponent } from './views/product-page/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductPageComponent},
      {path: '', redirectTo: '/products', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
