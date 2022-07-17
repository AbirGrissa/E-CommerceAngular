import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroupDirective, NgForm, FormGroup,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    if (!this.userForm.valid){return;}
    const user=this.userForm.getRawValue();
    this.authService.register(user).subscribe(s=>this.router.navigate(['/home']));
  }
  passwordValidator(control:FormControl)
  {
    let password= control.root.get("password");
    return password && control.value !== password.value ?
    {
      passwordMatch:true
    }
    : null
  }

  repeatpwd = new FormControl('',[Validators.required,this.passwordValidator]);
    
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  userForm=new FormGroup({
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    repeatpwd : this.repeatpwd,
    emailFormControl : this.emailFormControl
  });

  /*email = new FormControl('', [Validators.required, Validators.email]);
  /*l'inscription ne se fait pas jusqu'au l'entré d'un mail valide*/ 
  
    
  
  matcher = new MyErrorStateMatcher();
  hide = true;

  get firstname(){return this.userForm.get("firstname")}
  get lastname(){return this.userForm.get("lastname")}
  get email(){return this.userForm.get("email")}
  get password(){return this.userForm.get("password")}
  
  
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
