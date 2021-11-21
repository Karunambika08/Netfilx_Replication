import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhosWatchingComponent } from '../whos-watching/whos-watching/whos-watching.component';
import { FormContainerComponent } from './form-container/form-container.component';

const routes: Routes = [
  {
    path:'',
    component: FormContainerComponent ,
    children:[
      // {
      //   path:'',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // },
      // {
      //   path:'login',
      //   component: FormContainerComponent
      // },
      {
        path:'whos-watching',
        loadChildren:()=>
        import('../whos-watching/whos-watching.module').then(w=>w.WhosWatchingModule)
      },
    ]

  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
