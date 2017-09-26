import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { RegLoginService } from './login/reg-login.service';
import { PostService } from './post.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { PostComponent } from './dashboard/post/post.component';
// import { LengthPipe } from './length.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavComponent,
    LandingComponent,
    DetailsComponent,
    PostComponent,
    // LengthPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RegLoginService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
