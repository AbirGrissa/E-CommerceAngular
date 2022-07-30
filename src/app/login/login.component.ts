import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroupDirective, NgForm,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error!:string;
  password!:string;
  emailFormControl!:string;
  constructor(private router:Router, private authService:AuthService) {}

  login(){
    this.error='';
     this.authService.login(this.password,this.emailFormControl).subscribe(
      s=>this.router.navigate(["/compte"]),
      e=> this.error=e
      );
     
  }
  
  ngOnInit(): void {}
  //email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
