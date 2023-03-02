import { Component } from '@angular/core';
import {IProduct} from "../../api/models/product/Product";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";
import {ProductApiService} from "../../api/services/product.api.service";

let test;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title = 'First angular';

  products: IProduct[] = [];
  isLoad: boolean = false;
  valueSearch: string = "";

  constructor(
    private productService: ProductService,
    public modalService: ModalService,
    private productApiService: ProductApiService) {
  }

  ngOnInit(): void {
    this.switchLoad()

    this.productApiService.getAll().subscribe(res => {
      this.products = res;
      this.switchLoad()
    })

    this.productApiService.getById(1).subscribe(res => {
      console.log("productApiService.getById")
      console.log(res)
    })
  }

  switchLoad() {
    this.isLoad = !this.isLoad;
  }
}
