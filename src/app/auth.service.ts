import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user$ = new Subject<User>();
  constructor() { }

  login(password: string, email: FormControl<string | null>) {
    console.log("connected");
    return of({email,password});
  }

  get user(){return this.user$.asObservable();}

  logout(){
    //clean up subject (remove user from subject)
    //clean cookies if exist
    this.setUser(null);
    console.log("user log out")
  }

  register(user:any){ 
    //api call to save user in db
    //update the user subject 
    this.setUser(user);
    console.log(`registred user succefully`,user);
    return of(user);
  }
  private setUser(user:any){this.user$.next(user);}
  
}
