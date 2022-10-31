import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperiencia } from 'src/app/service/s-experiencia.service';
import { ImgExperienciaService } from 'src/app/service/img-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string='';

  constructor(
    private sExperiencia: SExperiencia, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imgExperienciaService: ImgExperienciaService) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    this.imgE = this.imgExperienciaService.url; /* Agregado */
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.imgE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      })
    this.imgExperienciaService.url = ""; /* Agregado */
  }

  uploadImage($event: any) {
    this.imgExperienciaService.uploadImage($event);
  }
}
