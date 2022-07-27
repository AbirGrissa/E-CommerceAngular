import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { Fournis } from '../modele/Fournis';

@Injectable({
  providedIn: 'root'
})
export class FournisService {
  private fournis!:Fournis;
  private uri='/api/fournis/';

  constructor(private httpClient:HttpClient) { }

  createFournis(fournisToSave:any){ 
    //post user to the server
    return this.httpClient.post<Fournis>(`${this.uri}create`, fournisToSave).pipe(
      switchMap( fournis=>{
      console.log(`fournis registred succeffully`,fournis);
      return of (fournis);
    }),
      catchError(e=>{
      console.log(`server erreur occured`,e);
      return throwError(`registration failed`);})
   
    );
    }

    readFournis(){ 
      return this.httpClient.get<Fournis[]>(`${this.uri}search`);
      }

    updateFournis(fournisToUpdate:any){ 
      return this.httpClient.put<Fournis>(`${this.uri}update`,fournisToUpdate);
    }

    deleteFournis(fournis:any){ 
      return this.httpClient.delete<Fournis>(`${this.uri}delete/:id`,fournis);
      }


  setFournis(fournis:any){//any for set as null
        this.fournis=fournis;}

    getFournis(){
        return this.fournis;
      } 
}
