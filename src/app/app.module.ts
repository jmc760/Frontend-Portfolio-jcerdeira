import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { InterceptorService } from './service/interceptor-service';
import { FormsModule } from "@angular/forms";
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { EditPersonaComponent } from './componentes/persona/edit-persona.component';
import { NewPersonaComponent } from './componentes/persona/new-persona.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    EducacionComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    PersonaComponent,
    EditPersonaComponent,
    NewPersonaComponent,
    SkillComponent,
    EditSkillComponent,
    NewSkillComponent,
    ProyectoComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
