export class Skill {
    id?: number;
    nombreS: string;
    porcentajeS: number;
    imgS: string;

    constructor(nombreS: string, porcentajeS: number, imgS: string) {
        this.nombreS = nombreS;
        this.porcentajeS = porcentajeS;
        this.imgS = imgS;
    }
}
