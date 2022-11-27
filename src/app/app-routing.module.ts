import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ChartComponent } from './component/chart/chart.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'Calculator', component: CalculatorComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'chart', component: ChartComponent},
  {path:'nestedform', component: NestedformComponent},
  {path:'paginator', component: PaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
