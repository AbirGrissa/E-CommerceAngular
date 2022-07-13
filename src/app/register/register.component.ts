import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroupDirective, NgForm,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
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
