import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperiencia } from 'src/app/service/s-experiencia.service';
import { ImgExperienciaService } from 'src/app/service/img-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private sExperiencia: SExperiencia, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imgExperienciaService: ImgExperienciaService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.expLab=data;
      }, err =>{
        alert("Error al modificar experiencia.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.expLab.imgE = this.imgExperienciaService.url;
    this.sExperiencia.update(id, this.expLab).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia.");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event: any) {
    this.imgExperienciaService.uploadImage($event);
  }

}
