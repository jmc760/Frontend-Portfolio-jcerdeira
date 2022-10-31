import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkill } from 'src/app/service/skill.service';
import { ImgSkillService } from 'src/app/service/img-skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private sSkill: SSkill,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgSkillService: ImgSkillService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar skill.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.imgS = this.imgSkillService.url;
    this.sSkill.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    this.imgSkillService.uploadImage($event);
  }

}
