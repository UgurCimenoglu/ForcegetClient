import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/offer/add/add.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'addOffer',
    pathMatch: 'full',
    component: AddComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
