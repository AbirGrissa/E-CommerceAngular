import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, of, Subject, switchMap, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user$ = new Subject<User>();
  private apiUrl='/api/auth/';
  constructor(private httpClient:HttpClient) { }

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
    return (this.httpClient.post<User>(`${this.apiUrl}register`, user).pipe
    (
      switchMap(savedUser=>{
        this.setUser(savedUser);
        console.log(`user registred succeffully`,savedUser);
        return of (savedUser);
      }),
      catchError(e=>{
        console.log(`server erreur occured`,e);
        return throwError(`registration failed please contact to admin`);
      })
    ));
    }


    //api call to save user in db
    //update the user subject 
    /*this.setUser(user);
    console.log(`registred user succefully`,user);
    return of(user);*/
  private setUser(user:any){this.user$.next(user);}
  
}
