import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  constructor(private http: HttpClient) {
  }

  getById (id : number) : Observable<IProduct>{
    return this.http.get<IProduct>('https://fakestoreapi.com/products', {
      params : new HttpParams({
        fromObject: { id : id }
      })
    });
  }

  getAll () : Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }
}
