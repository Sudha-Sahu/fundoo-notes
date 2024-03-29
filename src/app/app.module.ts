import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SigninComponent } from './components/signin/signin.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { IconsComponent } from './components/icons/icons.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { UpdateComponent } from './components/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { DemoComponent } from './demo/demo.component';
import { ColorComponent } from './color/color.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthguardService } from './services/authguardservice/authguard.service';
import { FilternotePipe } from './filterpipe/filternote.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    IconsComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    TrashComponent,
    ArchiveComponent,
    UpdateComponent,
    DemoComponent,
    ColorComponent,
    FilternotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule, HttpClientModule,
    MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, FormsModule,
    MatDialogModule, MatMenuModule, MatSnackBarModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
