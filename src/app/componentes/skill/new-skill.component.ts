import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImgSkillService } from 'src/app/service/img-skill.service';
import { SSkill } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS: string;
  porcentajeS: number;
  imgS: string;

  constructor(
    private sSkill: SSkill,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imgSkillService: ImgSkillService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.imgS = this.imgSkillService.url; /* Agregado */
    const skill = new Skill(this.nombreS, this.porcentajeS, this.imgS);
    this.sSkill.save(skill).subscribe(
      data => {
        alert("Skill añadida.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló.");
        this.router.navigate(['']);
      })
    this.imgSkillService.url = ""; /* Agregado */
  }

  uploadImage($event: any) {
    this.imgSkillService.uploadImage($event);
  }
}

