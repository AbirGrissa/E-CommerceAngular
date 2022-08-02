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
  image!:string;
  productForm!:FormGroup;
  constructor(private router:Router, private productService:ProductService) { }



  create(){
    if (!this.productForm.valid){return;}
    const product=this.productForm.getRawValue();
    this.productService.createproduct(product).subscribe(s=>this.router.navigate(["/Produit"]));
  }

  update(){
  
    this.productService.updateproduct(this.product).subscribe(s=>this.router.navigate(["/Produit"]));
    }

    onFileSelect(event:Event){
      const input = event.target as HTMLInputElement;
      const file = input!.files![0];
      this.productForm.patchValue({img :file});
      const allowedTypes = ["image/png","image/jpeg","image/jpg"];
      if (file && allowedTypes.includes(file.type)){
        const reader = new FileReader();
        reader.onload=()=> {
          this.image= reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }

  ngOnInit(): void {
    this.productForm=new FormGroup({
      productCode : new FormControl('',[Validators.required]),
      productname : new FormControl('',[Validators.required]),
      prix: new FormControl('',[Validators.required]),    
      description: new FormControl('',[Validators.required])  ,
      img: new FormControl('')      
    });

    this.product=this.productService.getproduct();
  }

}


