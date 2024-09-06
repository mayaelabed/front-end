export class Formation{
    id?: string;
    nom?:string;
    domaine?:string;
    periode?:string;
    prix?:string;






    constructor(  id?: string,
        nom?:string,
        domaine?:string,
        periode?:string,
        prix?:string,)
        {
            this.id=id;
            this.nom=nom;
            this.domaine=domaine;
            this.periode=periode;
            this.prix=prix;
        }
}

