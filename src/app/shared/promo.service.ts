import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Promo } from '../modele/Promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private httpClient:HttpClient) { }
}
