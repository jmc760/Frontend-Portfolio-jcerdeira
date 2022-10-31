import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyecto } from 'src/app/service/proyecto.service';
import { ImgProyectoService } from 'src/app/service/img-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proy: Proyecto = null;

  constructor(
    private sProyecto: SProyecto,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgProyectoService: ImgProyectoService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sProyecto.detail(id).subscribe(
      data => {
        this.proy = data;
      }, err => {
        alert("Error al modificar proyecto.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proy.imgP = this.imgProyectoService.url;
    this.sProyecto.update(id, this.proy).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto.");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event: any) {
    this.imgProyectoService.uploadImage($event);
  }

}