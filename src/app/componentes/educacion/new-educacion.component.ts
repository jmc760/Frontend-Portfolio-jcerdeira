import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacion } from 'src/app/service/educacion.service';
import { ImgEducacionService } from 'src/app/service/img-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';

  constructor(
    private sEducacion: SEducacion, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imgEducacionService: ImgEducacionService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.imgE = this.imgEducacionService.url; /* Agregado */
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educación añadida.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      })
    this.imgEducacionService.url = ""; /* Agregado */
  }

  uploadImage($event: any) {
    this.imgEducacionService.uploadImage($event);
  }
}
