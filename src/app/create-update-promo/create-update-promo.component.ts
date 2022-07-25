import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromoService } from '../shared/promo.service';

@Component({
  selector: 'app-create-update-promo',
  templateUrl: './create-update-promo.component.html',
  styleUrls: ['./create-update-promo.component.css']
})
export class CreateUpdatePromoComponent implements OnInit {

  constructor(private router:Router, private promoService:PromoService) { }

  promoForm=new FormGroup({
    codePromo : new FormControl('',[Validators.required]),
    pourcentage : new FormControl('',[Validators.required]),
    beginDate : new FormControl('',[Validators.required]),
    endDate : new FormControl('',[Validators.required]),
    
  });

  create(){
    if (!this.promoForm.valid){return;}
    const promo=this.promoForm.getRawValue();
    this.promoService.createPromo(promo).subscribe(s=>this.router.navigate(["/Fournisseur"]));
  }

  get codePromo(){return this.promoForm.get("firstname");}
  get pourcentage(){return this.promoForm.get("lastname")}
  get beginDate(){return this.promoForm.get("email")}
  get endDate(){return this.promoForm.get("password")}

  ngOnInit(): void {
  }

}


