import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  TOKEN_Key="ECommerce.AuthToken";

  constructor() { }
  setToken(token:string){
    if (!token){return;}
    this.removeToken();
    window.localStorage.setItem(this.TOKEN_Key,token);
    }
    
    
    getToken(){
    return window.localStorage.getItem(this.TOKEN_Key);
    }
    
    
    removeToken(){
    window.localStorage.removeItem(this.TOKEN_Key);
    }
}
