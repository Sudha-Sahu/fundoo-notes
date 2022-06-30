import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';

const routes: Routes = [
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'resetpassword/:token', component:ResetpasswordComponent},
  {path: 'forgetpass', component:ForgetpasswordComponent},
  {path: 'dashboard', component:DashboardComponent,
    children: [
      {path: 'createnotes', component:CreatenoteComponent},
      {path: 'displaynotes', component:DisplayNotesComponent},
      {path: 'notes', component:GetAllNotesComponent}
    ]
},
{path: 'icon', component:IconsComponent},
{path: 'getallnote', component:GetAllNotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
