import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import{SignUpPageComponent} from './sign-up-page/sign-up-page.component';


const routes: Routes = [
  {
    path:'',
  component: SignUpPageComponent
  },
  {
    path:'signupform',
    component: SignUpFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
