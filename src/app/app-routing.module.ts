import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './components/prova/prova.component';

const routes: Routes = [
  { path: "", redirectTo: "app-prova", pathMatch: "full" }, //dichiara l'index dell'applicazione e redirige in caso l'URL sia vuoto
  { path:"app-prova", component: ProvaComponent}]; //dice dove prendere il path del componente della nostra index

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
