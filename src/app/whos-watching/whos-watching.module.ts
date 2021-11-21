import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhosWatchingRoutingModule } from './whos-watching-routing.module';
import { WhosWatchingComponent } from './whos-watching/whos-watching.component';
import { AddMemberComponent } from './add-member/add-member.component';

import{ReactiveFormsModule,FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    WhosWatchingComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    WhosWatchingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WhosWatchingModule { }
