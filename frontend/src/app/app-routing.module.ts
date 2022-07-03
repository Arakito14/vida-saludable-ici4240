import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FaqScreenComponent } from './screens/faq-screen/faq-screen.component';
import { EjerciciosScreenComponent } from './screens/ejercicios-screen/ejercicios-screen.component';
import { SobreNosotrosScreenComponent } from './screens/sobre-nosotros-screen/sobre-nosotros-screen.component';
import { AlimentacionScreenComponent } from './screens/alimentacion-screen/alimentacion-screen.component';
import { CabezaComponent } from './screens/enfermedades/cabeza/cabeza.component';
import { CancerComponent } from './screens/enfermedades/cancer/cancer.component';
import { CardiacosComponent } from './screens/enfermedades/cardiacos/cardiacos.component';
import { ColonComponent } from './screens/enfermedades/colon/colon.component';
import { DepresionComponent } from './screens/enfermedades/depresion/depresion.component';
import { OvaricosComponent } from './screens/enfermedades/ovaricos/ovaricos.component';
import { TiroideComponent } from './screens/enfermedades/tiroide/tiroide.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent},
  { path: 'ejercicios', component: EjerciciosScreenComponent},
  { path: 'faq', component: FaqScreenComponent},
  { path: 'alimentacion', component: AlimentacionScreenComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosScreenComponent},
  { path: 'cabeza', component: CabezaComponent},
  { path: 'cancer', component: CancerComponent},
  { path: 'cardiacos', component: CardiacosComponent},
  { path: 'colon', component: ColonComponent},
  { path: 'depresion', component: DepresionComponent},
  { path: 'tiroide', component: TiroideComponent},
  { path: 'ovaricos', component: OvaricosComponent},
  { path: 'personal', component: EmployeeComponent},
  { path: 'ingreso', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
