import {Component, OnInit} from '@angular/core';
import {IProduct} from "../models/Product";
import {ProductService} from "../services/ProductService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'First angular';

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    })
  }
}
