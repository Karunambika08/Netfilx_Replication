import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'login',
  loadChildren:() =>
  import('./login/login.module').then(m =>m.LoginModule)
},
{
  path:'signup',
  loadChildren:() =>
  import('./signup/signup.module').then(m =>m.SignupModule)
},
// {
//   path:'signup',
//   children:[
//     {
//       path:'',
//       component: SignUpPageComponent
//     }
//   ]
// },
{
  path:'home',
  loadChildren:() =>
  import('./home/home.module').then(n=>n.HomeModule)
},
{
  path:'whos-watching',
  loadChildren:() =>
  import('./whos-watching/whos-watching.module').then(n=>n.WhosWatchingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
