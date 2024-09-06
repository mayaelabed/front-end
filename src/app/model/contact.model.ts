export class contact
{
    id?: string;
    nom?:string;
    email?:string;
    sujet?:string;
    message?:string;


    constructor( id?: string,
        nom?:string,
        email?:string,
        sujet?:string,
        message?:string)
        {
            this.id=id;
            this.nom=nom;
            this.email=email;
            this.sujet=sujet;
            this.message=message;
        }
}