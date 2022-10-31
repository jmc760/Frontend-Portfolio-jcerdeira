import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { SPersona } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  pers: Persona = null;

  constructor(
    private sPersona: SPersona,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public sImage: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sPersona.detail(id).subscribe(
      data => {
        this.pers = data;
      }, err => {
        alert("Error al modificar persona.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.pers.imgP = this.sImage.url;
    this.sPersona.update(id, this.pers).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar persona.");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id']
    const name = "perfil_" + id;
    this.sImage.uploadImage($event);
  }

}


