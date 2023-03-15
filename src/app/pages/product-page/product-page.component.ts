import { Component } from '@angular/core';
import {IProduct} from "../../api/models/product/Product";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";
import {ProductApiService} from "../../api/services/product.api.service";
import {HttpClient} from "@angular/common/http";


interface IPassportDto{
  file: string;
}

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
    private productApiService: ProductApiService,
    private http: HttpClient) {
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

  downloadExcel() {
    this.http.get<IPassportDto>("http://localhost:5051/api/v1/passport/base", {
      headers: {
        'OrganizationId': '1',
        'Region': 'Moscow',
        'UserId': '1'
      }
    })
      .subscribe(res => {
        const bytes = res.file
        const data = atob(bytes);
        let array = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          array[i] = data.charCodeAt(i);
        }

        const dataUint8Array = new Uint8Array(array);
        const blob = new Blob([dataUint8Array], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = "Паспорт.xlsx";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
}
