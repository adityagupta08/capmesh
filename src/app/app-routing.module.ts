import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: 'auth/:key', component: AuthComponent },
  { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  { path: 'profile/:userName', component:ProfileComponent, canActivate: [AuthGuard]},
  { path: 'chats', component:ChatboxComponent, canActivate: [AuthGuard]},
  { path: 'home', component: PostComponent, canActivate: [AuthGuard]}
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

