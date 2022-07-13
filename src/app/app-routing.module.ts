import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    pathMatch:'full',
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
