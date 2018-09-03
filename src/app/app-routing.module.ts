import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'auth/:key', component: AuthComponent },
  { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard] }
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }

