import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { WhosWatchingComponent } from './whos-watching/whos-watching.component';

const routes: Routes = [
  
{
    path:'',
    component:WhosWatchingComponent
  },
  {
    path:'add',
    component:AddMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhosWatchingRoutingModule { }
