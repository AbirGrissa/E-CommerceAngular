import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournis } from '../modele/Fournis';
import { FournisService } from '../shared/fournis.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fournis! : Fournis[];
  constructor(private fournisS:FournisService ,private router:Router) { }

  readFournis(){
    this.fournisS.readFournis().subscribe(
      data=>{
        console.log(data);
        this.fournis= data as Fournis[];
        console.log(this.fournis);
      },
      error=>{
        console.log(error);
      } 
    )
  }
  create(){
    this.fournisS.setFournis(null);
    this.router.navigate(['/createUpdateFournis'])
  }
  update(fournis:Fournis){
    this.fournisS.setFournis(fournis);
    this.router.navigate(['/createUpdateFournis'])
  }
  delete(fournis:Fournis){
    this.fournisS.deleteFournis(fournis.emailFormControl).subscribe(
      data=>{
        this.fournis.splice(this.fournis.indexOf(fournis),1);
      },
      err=>{

      }
    );
  }

  ngOnInit(): void {this.readFournis();
  }

}
