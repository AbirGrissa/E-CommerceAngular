import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';

export interface User {
  email:string;
  fullname:string;
  password:string
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user$ = Subject<User>();
  constructor() { }

  login(password: string, email: FormControl<string | null>) {
    console.log("connected");
    return of({email,password});
  }
  get user(){return this.user$.asObservable();}

  register(user:any){ 
    this.user$.next(user);
    return of(user);
  }

  
}
