import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from './components/ui/button/button.component';
import { InputComponent } from './components/ui/input/input.component';
import {AppRoutingModule} from "./app-routing.module";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/ui/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ButtonComponent,
    InputComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
