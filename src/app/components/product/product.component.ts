import { Component, Input} from "@angular/core";
import {IProduct} from "../../api/models/product/Product";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct

  isShow: boolean = false;

  onClickButton () {
    console.log("1")
    this.isShow = !this.isShow;
  }
}
