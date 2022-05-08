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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeScreenComponent,
    FaqScreenComponent,
    EjerciciosScreenComponent,
    SobreNosotrosScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
