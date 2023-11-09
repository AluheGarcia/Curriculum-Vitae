import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursadaComponent } from './cursada/cursada.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HeaderComponent } from './header/header.component';
import { LenguajeComponent } from './lenguaje/lenguaje.component';

import{HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CursadaComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    HeaderComponent,
    LenguajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
