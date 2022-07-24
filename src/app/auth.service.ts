import { Injectable } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { EMPTY, of, Subject, throwError} from 'rxjs';
import {switchMap,catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { FormControl } from '@angular/forms';
import {TokenStorageService} from "./token-storage.service";

interface UserDto{
  user:User;
  token:string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user$ = new Subject<User>;
  private apiUrl='/api/auth/';
  constructor(private httpClient:HttpClient,private tokenStorage:TokenStorageService) { }


  login(password: string, emailFormControl: string) {
    const loginCredentials={emailFormControl,password};
    console.log("connected",loginCredentials);
    return this.httpClient.post<UserDto>(`${this.apiUrl}login`,loginCredentials).pipe(
      switchMap( ({user,token}) =>{
        this.setUser(user);
        this.tokenStorage.setToken(token);
        console.log(`user founded: `,user);
      return of (user);}
      ),
      catchError(e=>{
        console.log(`server erreur occured`,e);
        return throwError(`login failed please check your informations`);})      
    );
  }

  get user(){return this.user$.asObservable();}

  logout(){
    //clean up subject (remove user from subject)
    //clean cookies if exist
    //remove token from local storage
    this.tokenStorage.removeToken()
    this.setUser(null);
    console.log("user log out")
  }

  register(userToSave:any){ 
    //post user to the server
    return this.httpClient.post<any>(`${this.apiUrl}register`, userToSave).pipe(
      switchMap( ({user,token})=>{
      this.setUser(user);
      this.tokenStorage.setToken(token);
      console.log(`user registred succeffully`,user);
      return of (user);
    }),
      catchError(e=>{
      console.log(`server erreur occured`,e);
      return throwError(`registration failed please contact to admin`);})
   
    );
    }


    //api call to save user in db
    //update the user subject 
    /*this.setUser(user);
    console.log(`registred user succefully`,user);
    return of(user);*/
  private setUser(user:any){
    this.user$.next(user);}

  findMe(){
    const token = this.tokenStorage.getToken();
    if (!token){ return EMPTY;}
    return this.httpClient.get<any>(`${this.apiUrl}findme`).pipe
    ( switchMap((user) =>{
      this.setUser(user);
      console.log(`user found`,user);
      return of (user);
    }),
    catchError (e=>{
      console.log(`your login details could not be verified. Please try again`,e);
      return throwError(`your login details could not be verified`);
    }
    ));
  }
}