import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CartComponent,
    PaymentComponent,
    FinalPageComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ProductService],
  bootstrap: [MainComponent]
})
export class AppModule { }
