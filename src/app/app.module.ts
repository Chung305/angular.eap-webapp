import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorComponent } from './components/error/error.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HttpErrorInterceptor } from '../app/services/http-error.interceptor';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CountdownModule } from "ng2-date-countdown";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ErrorComponent,
    SignUpFormComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
