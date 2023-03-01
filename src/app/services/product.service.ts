import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {IProduct} from "../api/models/product/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll () : Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }
}
