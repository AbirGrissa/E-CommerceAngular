export interface User {
    email:string;
    firstname:string;
    lastname:string;
    password:string;
    roles? :any[];
    /*repeatpsw?:string/*optionnel car on va pas stocker dans la bd*/
  }