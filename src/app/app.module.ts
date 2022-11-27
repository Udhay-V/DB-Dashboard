import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatPaginatorModule } from '@angular/material/paginator';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { ChartComponent } from './component/chart/chart.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { PaginatorComponent } from './component/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    NavbarComponent,
    SideMenuComponent,
    ChartComponent,
    NestedformComponent,
    PaginatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatPaginatorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
