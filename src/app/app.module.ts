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
import { CompteComponent } from './compte/compte.component';
import { AuthHeaderInterceptorService } from './interceptors/auth-header-interceptor.service';
import { PromotionComponent } from './promotion/promotion.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
//import { CreateUpdateComponent } from './create-update/create-update.component';
import { CreateUpdateFornisComponent } from './create-update-fornis/create-update-fornis.component';
import { ListFornisComponent } from './list-fornis/list-fornis.component';
import { ListpromoComponent } from './listpromo/listpromo.component';
import { CreateUpdatePromoComponent } from './create-update-promo/create-update-promo.component';
import { PromoService } from './shared/promo.service';


/*import { ProductsModule } from './products/products.module';*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CompteComponent,
    PromotionComponent,
    FournisseurComponent,
    ClientComponent,
    CreateUpdateFornisComponent,
    ListFornisComponent,
    ListpromoComponent,
    CreateUpdatePromoComponent,    
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
