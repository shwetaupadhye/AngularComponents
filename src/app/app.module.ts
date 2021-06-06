import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
