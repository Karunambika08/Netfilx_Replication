import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    SignUpPageComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule
  ]
})
export class SignupModule { }
