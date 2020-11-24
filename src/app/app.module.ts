import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import FormsModule and ReactiveFormsModule:
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import HttpClientModule for API integration:
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// import Approutingmodule:
import { AppRoutingModule } from "./app-routing.module";
import { PicstagramModule } from "./components/picstagram/picstagram.module";

// import JwtInterceptor:
import { JwtInterceptor } from './interceptor/jwt.interceptor';
// import components:
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { GlobalAlertComponent } from "./components/shared/global-alert/global-alert.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    GlobalAlertComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    // PicstagramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PicstagramModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
