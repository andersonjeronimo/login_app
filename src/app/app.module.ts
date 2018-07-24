import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { PreloaderComponent } from './_directives/preloader/preloader.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './_guard/auth-guard.service';
import { AlertService } from './_services/alert/alert.service';
import { LoginService } from './_services/login/login.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    PreloaderComponent,
    ErrorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AlertService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
