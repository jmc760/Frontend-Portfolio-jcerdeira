import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { SPersona } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {
  nombreP: string = '';
  puestoP: string = '';
  ubicacionP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private sPersona: SPersona, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const pers = new Persona(this.nombreP, this.puestoP, this. ubicacionP, this.descripcionP, this.imgP);
    this.sPersona.save(pers).subscribe(
      data => {
        alert("Persona añadida.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      })
  }
}
