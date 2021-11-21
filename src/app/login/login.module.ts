import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { FormContainerComponent } from './form-container/form-container.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon' ;
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FormContainerComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class LoginModule { }
