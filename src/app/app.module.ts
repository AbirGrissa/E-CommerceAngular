import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';



/*import { ProductsModule } from './products/products.module';*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule
   /* MatCardModule,
    MatToolbarModule
    ProductsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
