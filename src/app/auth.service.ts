import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(password: string, email: FormControl<string | null>) {
    console.log("connected");
    return of({email,password});
  }

  
}
