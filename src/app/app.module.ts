import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { OauthService } from './services/oauth.service';
import { HttpModule } from '@angular/http';
import { EndpointSecuredService } from './services/endpoint-secured/endpoint-secured.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    OauthService,
    EndpointSecuredService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
