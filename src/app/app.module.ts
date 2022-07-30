import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptorService } from './interceptors/auth-header-interceptor.service';
import { PromotionComponent } from './promotion/promotion.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
//import { CreateUpdateComponent } from './create-update/create-update.component';
import { CreateUpdateFornisComponent } from './create-update-fornis/create-update-fornis.component';
import { CreateUpdatePromoComponent } from './create-update-promo/create-update-promo.component';
import { PromoService } from './shared/promo.service';
import { CrateUpdateProductComponent } from './crate-update-product/crate-update-product.component';
import { ProduitComponent } from './produit/produit.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';


/*import { ProductsModule } from './products/products.module';*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PromotionComponent,
    FournisseurComponent,
    CreateUpdateFornisComponent,
    CreateUpdatePromoComponent,
    CrateUpdateProductComponent,
    ProduitComponent,
    MonCompteComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi:true
    },
    PromoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
