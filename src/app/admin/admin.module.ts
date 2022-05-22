import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarViewComponent } from './toolbar-view/toolbar-view.component';
import { MaterialModule } from '../material/material.module';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ContactComponent } from './contact/contact.component';


const routes:Route[]=[
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthFormComponent}
]
@NgModule({
  declarations: [
    ToolbarViewComponent,
    HomeComponent,
    AuthFormComponent,
    ContactComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ToolbarViewComponent
  ]
})
export class AdminModule { }
