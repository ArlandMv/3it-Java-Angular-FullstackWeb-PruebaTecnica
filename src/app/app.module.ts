import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ResultadosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
