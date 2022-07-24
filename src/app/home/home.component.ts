import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   
  control="";
  constructor() {}
  setControl(ch:string){this.control=ch;}

  ngOnInit(): void {this.control=""; }

}
