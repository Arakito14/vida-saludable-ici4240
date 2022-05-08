import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FaqScreenComponent } from './screens/faq-screen/faq-screen.component';
import { EjerciciosScreenComponent } from './screens/ejercicios-screen/ejercicios-screen.component';
import { SobreNosotrosScreenComponent } from './screens/sobre-nosotros-screen/sobre-nosotros-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent},
  { path: 'ejercicios', component: EjerciciosScreenComponent},
  { path: 'faq', component: FaqScreenComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
