import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../modele/product';
import {ProductService} from'../shared/product.service'

@Component({
  selector: 'app-crate-update-product',
  templateUrl: './crate-update-product.component.html',
  styleUrls: ['./crate-update-product.component.css']
})
export class CrateUpdateProductComponent implements OnInit {

  product!:Product;
  constructor(private router:Router, private productService:ProductService) { }

  productForm=new FormGroup({
    productCode : new FormControl('',[Validators.required]),
    productname : new FormControl('',[Validators.required]),
    prix: new FormControl('',[Validators.required]),    
    description: new FormControl('',[Validators.required])  
    
  });

  create(){
    if (!this.productForm.valid){return;}
    const product=this.productForm.getRawValue();
    this.productService.createproduct(product).subscribe(s=>this.router.navigate(["/Produit"]));
  }

  update(){
    if (this.productForm.valid){
    this.productService.updateproduct(this.product).subscribe(s=>this.router.navigate(["/Produit"]));}
    }

  ngOnInit(): void {this.product=this.productService.getproduct();
  }

}


