import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Promo } from '../modele/Promo';
import { PromoService } from '../shared/promo.service';

@Component({
  selector: 'app-create-update-promo',
  templateUrl: './create-update-promo.component.html',
  styleUrls: ['./create-update-promo.component.css']
})
export class CreateUpdatePromoComponent implements OnInit {
  promo!:Promo;
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
    this.promoService.createPromo(promo).subscribe(s=>this.router.navigate(["/Promotion"]));
  }

  update(){
    this.promoService.updatePromos(this.promo).subscribe(s=>this.router.navigate(["/Promotion"]));
    }
  



  ngOnInit(): void {
    this.promo=this.promoService.getPromo();
  }

}


