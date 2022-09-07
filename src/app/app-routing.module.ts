import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', 
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginComponent]
