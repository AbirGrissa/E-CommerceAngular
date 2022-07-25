import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Promo } from '../modele/Promo';
import { catchError, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  private uri='/api/';
  //private headers=new HttpHeaders().set('content-type','application/json');

  constructor(private httpClient:HttpClient) { }
  createPromo(promoToSave:any){ 
    //post user to the server
    return this.httpClient.post<Promo>(`${this.uri}create`, promoToSave).pipe(
      switchMap( promo=>{
      console.log(`promo registred succeffully`,promo);
      return of (promo);
    }),
      catchError(e=>{
      console.log(`server erreur occured`,e);
      return throwError(`registration failed`);})
   
    );
    }

    readPromos(){ 
      return this.httpClient.get<Promo>(`${this.uri}search`);
      }

    updatePromos(promoToUpdate:any){ 
      return this.httpClient.put<Promo>(`${this.uri}update`,promoToUpdate);
    }

    deletePromos(codePromo:any){ 
      return this.httpClient.delete<Promo>(`${this.uri}delete/`,codePromo);
      }
}
