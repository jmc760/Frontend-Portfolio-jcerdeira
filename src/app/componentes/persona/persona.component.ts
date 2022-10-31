import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { SPersona } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  pers: Persona[] = [];

  constructor(private sPersona: SPersona, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.sPersona.lista().subscribe(
      data => {this.pers = data;}
    )
  }

  delete(id?: number): void{
    if(id != undefined){
      this.sPersona.delete(id).subscribe(
        data =>{
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona.");
        }
      )
    }
  }

}
