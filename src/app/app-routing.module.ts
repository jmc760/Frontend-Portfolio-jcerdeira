import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewPersonaComponent } from './componentes/persona/new-persona.component';
import { EditPersonaComponent } from './componentes/persona/edit-persona.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'nuevaper', component: NewPersonaComponent },
  { path: 'editper/:id', component: EditPersonaComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'nuevoproy', component: NewProyectoComponent },
  { path: 'editproy/:id', component: EditProyectoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
