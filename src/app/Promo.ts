export interface Promo {
    codePromo:string;
    pourcentage:string;
    beginDate:string;
    endDate:string;
    produitSolde? :any[];
    /*repeatpsw?:string/*optionnel car on va pas stocker dans la bd*/
  }