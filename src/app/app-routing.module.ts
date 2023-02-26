import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
