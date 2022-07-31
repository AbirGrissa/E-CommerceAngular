import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../modele/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits! : Product[];
  constructor(private produitS:ProductService ,private router:Router) { }

  readProduit(){
    this.produitS.readproducts().subscribe(
      data=>{
        console.log(data);
        this.produits= data as Product[];
        console.log(this.produits);
      },
      error=>{
        console.log(error);
      } 
    )
  }

  create(){
    this.produitS.setproduct(null);
    this.router.navigate(['/createUpdateproduct'])
  }
  update(produit:Product){
    this.produitS.setproduct(produit);
    this.router.navigate(['/createUpdateproduct'])
  }
  delete(produit:Product){
    this.produitS.deleteproduct(produit.productCode).subscribe(
      data=>{
        this.produits.splice(this.produits.indexOf(produit),1);
      },
      err=>{

      }
    );
  }

  ngOnInit(): void {this.readProduit();
  }

}


