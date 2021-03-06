import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { SignupComponent } from './components/signup/signup.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordResetComponent,
    NotFoundComponent,
    SignupComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
