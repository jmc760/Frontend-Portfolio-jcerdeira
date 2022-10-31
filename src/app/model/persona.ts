export class Persona {
    id? : number;
    nombreP : string;
    puestoP : string;
    ubicacionP: string;
    descripcionP: string;
    imgP: string;

    constructor(nombreP: string, puestoP: string, ubicacionP: string, descripcionP: string, imgP: string){
        this.nombreP = nombreP;
        this.puestoP = puestoP;
        this.ubicacionP = ubicacionP;
        this.descripcionP = descripcionP;
        this.imgP = imgP;
    }
}
