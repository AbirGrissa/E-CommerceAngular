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
    const user=this.userForm.getRawValue();
    this.authService.register(user).subscribe(s=>this.router.navigate(['/login']));
  }



  userForm=new FormGroup({
    firstname : new FormControl('',[Validators.required]),
    lastsname : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });

  email = new FormControl('', [Validators.required, Validators.email]);
  /*l'inscription ne se fait pas jusqu'au l'entré d'un mail valide*/ 
  /*getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }*/
    
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  hide = true;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
