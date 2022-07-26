import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PromoService } from '../shared/promo.service';
import{Promo} from '../modele/Promo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})

export class PromotionComponent implements OnInit  {
  promotions! : Promo[];
  constructor(private promoS:PromoService ,private router:Router) { }

    readPromotion(){
    this.promoS.readPromos().subscribe(
      data=>{
        console.log(data);
        this.promotions= data as Promo[];
        console.log(this.promotions);
      },
      error=>{
        console.log(error);
      } 
    )
  }
  update(promotion:Promo){
    this.promoS.setPromo(promotion);
    this.router.navigate(['/createUpdatePromo'])
  }
  delete(promotion:Promo){
    this.promoS.deletePromos(promotion.codePromo).subscribe(
      data=>{
        this.promotions.splice(this.promotions.indexOf(promotion),1);
      },
      err=>{

      }
    );
  }

  ngOnInit(): void {this.readPromotion();
  }

}
