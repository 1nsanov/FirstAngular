import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "../components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
