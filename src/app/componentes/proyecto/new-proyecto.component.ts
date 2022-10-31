import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyecto } from 'src/app/service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgProyectoService } from 'src/app/service/img-proyecto.service';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string = '';
  anioP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(
    private sProyecto: SProyecto,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imgProyectoService: ImgProyectoService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.imgP = this.imgProyectoService.url; /* Agregado */
    const proy = new Proyecto(this.nombreP, this.anioP, this.descripcionP, this.imgP);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló.");
        this.router.navigate(['']);
      })
    this.imgProyectoService.url = ""; /* Agregado */
  }

  uploadImage($event: any) {
    this.imgProyectoService.uploadImage($event);
  }
}
