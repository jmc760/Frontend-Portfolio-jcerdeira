import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SSkill } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private sSkill: SSkill, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.sSkill.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data =>{
        this.cargarSkill();
      }, err => {
        alert("No se pudo eliminar.")
      })
    }
  }

}
