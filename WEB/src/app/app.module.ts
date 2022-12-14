import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LogeadoComponent } from './privado/logeado/logeado.component';
import { HeaderPrivadoComponent } from './privado/header-privado/header-privado.component';
import { AsideBarPrivadoComponent } from './privado/aside-bar-privado/aside-bar-privado.component';
import { CrearPublicacionComponent } from './privado/crear-publicacion/crear-publicacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegistrarComponent,
    LogeadoComponent,
    HeaderPrivadoComponent,
    AsideBarPrivadoComponent,
    CrearPublicacionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'crear-publicacion', component: CrearPublicacionComponent},
      {path: 'logeado', component: LogeadoComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registrar', component: RegistrarComponent},
      {path: '', component: MainComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
