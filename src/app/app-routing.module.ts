import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrateUpdateProductComponent } from './crate-update-product/crate-update-product.component';
import { CreateUpdateFornisComponent } from './create-update-fornis/create-update-fornis.component';
import { CreateUpdatePromoComponent } from './create-update-promo/create-update-promo.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { ProduitComponent } from './produit/produit.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
   /* component:HomeComponent*/
  },
  {
    path:'home',
    /*pathMatch:'full',*/
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'compte',
    component:MonCompteComponent
  },
  {
    path:'Produit',
    component:ProduitComponent
  },
 
  {
    path:'createUpdateproduct',
    component:CrateUpdateProductComponent
  },
  {
    path:'createUpdateFournis',
    component:CreateUpdateFornisComponent
  },
  {
    path:'createUpdatePromo',
    component:CreateUpdatePromoComponent
  },
  {
    path:'Promotion',
    component:PromotionComponent
  },
  {
    path:'Fournisseur',
    component:FournisseurComponent
  },
  {
    path:'login',
    /*pathMatch:'full',*/
    component:LoginComponent
  },
  {
  path:'products',
  pathMatch:'full',
  loadChildren:  () => import('./products/products.module').then(m => m.ProductsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
