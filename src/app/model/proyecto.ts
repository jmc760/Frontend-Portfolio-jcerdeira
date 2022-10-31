export class Proyecto {

    id? : number;
    nombreP : string;
    anioP : string;
    descripcionP: string;
    imgP: string;

    constructor(nombreP: string, anioP: string, descripcionP: string, imgP: string){
        this.nombreP = nombreP;
        this.anioP = anioP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
    }
}