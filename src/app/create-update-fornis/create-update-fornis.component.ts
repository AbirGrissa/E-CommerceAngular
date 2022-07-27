import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fournis } from '../modele/Fournis';
import { FournisService } from '../shared/fournis.service';

@Component({
  selector: 'app-create-update-fornis',
  templateUrl: './create-update-fornis.component.html',
  styleUrls: ['./create-update-fornis.component.css']
})
export class CreateUpdateFornisComponent implements OnInit {
  fournis!:Fournis;

  constructor(private router:Router, private fournisService:FournisService) { }

  fournisForm=new FormGroup({
    emailFormControl : new FormControl('',[Validators.required]),
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),    
  });

  create(){
    if (!this.fournisForm.valid){return;}
    const fournis=this.fournisForm.getRawValue();
    this.fournisService.createFournis(fournis).subscribe(s=>this.router.navigate(["/Fournisseur"]));
  }

  update(){
    if (this.fournisForm.valid){
    this.fournisService.updateFournis(this.fournis).subscribe(s=>this.router.navigate(["/Fournisseur"]));}
    }

  ngOnInit(): void {this.fournis=this.fournisService.getFournis();
  }

}
