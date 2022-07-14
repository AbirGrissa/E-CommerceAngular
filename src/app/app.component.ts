import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class ButtonOverviewExample {}*/
export class AppComponent implements OnDestroy{
  title = 'FirstAngularApp';
  user!: User;
  userSubscription: Subscription;
  constructor(private authService:AuthService, private router:Router)
  {
    this.userSubscription=
    this.authService.user.subscribe(user=>(this.user=user)); //get from observable
  }
  ngOnDestroy(): void {
    if (this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate([""]);
  }
  myacount(){}
}
