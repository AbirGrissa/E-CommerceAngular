import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, switchMap, throwError } from 'rxjs';
import{Product} from '../modele/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product!:Product;
  private uri='/api/product/';

  constructor(private httpClient:HttpClient) { }

  createproduct(productToSave:any){ 
    //post user to the server
    return this.httpClient.post<Product>(`${this.uri}create`, productToSave).pipe(
      switchMap( product=>{
      console.log(`product registred succeffully`,product);
      return of (product);
    }),
      catchError(e=>{
      console.log(`server erreur occured`,e);
      return throwError(`registration failed`);})
   
    );
    }

    readproducts(){ 
      return this.httpClient.get<Product[]>(`${this.uri}search`);
      }

    updateproduct(productToUpdate:any){ 
      return this.httpClient.put<Product>(`${this.uri}update`,productToUpdate);
    }

    deleteproduct(product:any){ 
      return this.httpClient.delete<Product>(`${this.uri}delete/:id`,product);
      }


  setproduct(product:any){//any for set as null
        this.product=product;}

    getproduct(){
        return this.product;
      } 

}
