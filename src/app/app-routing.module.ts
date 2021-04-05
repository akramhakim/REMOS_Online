import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SendInvitationComponent } from './invitation/send-invitation/send-invitation.component';
import { SidenavComponent } from './side-nav/side-nav.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'send-invite', component: SendInvitationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '*', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
