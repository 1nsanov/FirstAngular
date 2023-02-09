import { Component } from '@angular/core';
import {IProduct} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

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

  constructor(private productService: ProductService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.switchLoad()
    this.productService.getAll().subscribe(res => {
      this.products = res;
      this.switchLoad()
    })
  }

  switchLoad() {
    this.isLoad = !this.isLoad;
  }
}
