import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'registrarse', component: SingUpComponent },
  { path: 'encuesta', component: QuestionsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    LoginComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
