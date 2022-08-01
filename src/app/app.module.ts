import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ItemEducacionComponent } from './componentes/item-educacion/item-educacion.component';
import { ItemExperienciaComponent } from './componentes/item-experiencia/item-experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ItemSkillsComponent } from './componentes/item-skills/item-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ItemProyectosComponent } from './componentes/item-proyectos/item-proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { InterceptorService } from './service/interceptor-service';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    PersonaComponent,
    ExperienciaComponent,
    EducacionComponent,
    ItemEducacionComponent,
    ItemExperienciaComponent,
    SkillsComponent,
    ItemSkillsComponent,
    ProyectosComponent,
    ItemProyectosComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
