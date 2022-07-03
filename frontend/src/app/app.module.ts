import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FaqScreenComponent } from './screens/faq-screen/faq-screen.component';
import { EjerciciosScreenComponent } from './screens/ejercicios-screen/ejercicios-screen.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SobreNosotrosScreenComponent } from './screens/sobre-nosotros-screen/sobre-nosotros-screen.component';
import { CancerComponent } from './screens/enfermedades/cancer/cancer.component';
import { ColonComponent } from './screens/enfermedades/colon/colon.component';
import { CardiacosComponent } from './screens/enfermedades/cardiacos/cardiacos.component';
import { DepresionComponent } from './screens/enfermedades/depresion/depresion.component';
import { CabezaComponent } from './screens/enfermedades/cabeza/cabeza.component';
import { TiroideComponent } from './screens/enfermedades/tiroide/tiroide.component';
import { OvaricosComponent } from './screens/enfermedades/ovaricos/ovaricos.component';
import { AlimentacionScreenComponent } from './screens/alimentacion-screen/alimentacion-screen.component';
import { CajaDeComentariosComponent } from './components/caja-de-comentarios/caja-de-comentarios.component';
import { MenuEnfermedadesComponent } from './components/menu-enfermedades/menu-enfermedades.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeScreenComponent,
    FaqScreenComponent,
    EjerciciosScreenComponent,
    SobreNosotrosScreenComponent,
    CancerComponent,
    ColonComponent,
    CardiacosComponent,
    DepresionComponent,
    CabezaComponent,
    TiroideComponent,
    OvaricosComponent,
    AlimentacionScreenComponent,
    CajaDeComentariosComponent,
    MenuEnfermedadesComponent,
    FooterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    YouTubePlayerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
