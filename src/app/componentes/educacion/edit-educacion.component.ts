import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacion } from 'src/app/service/educacion.service';
import { ImgEducacionService } from 'src/app/service/img-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private sEducacion: SEducacion,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgEducacionService: ImgEducacionService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sEducacion.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educación.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imgE = this.imgEducacionService.url;
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar educación.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    this.imgEducacionService.uploadImage($event);
  }

}
