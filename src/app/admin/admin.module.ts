import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarViewComponent } from './toolbar-view/toolbar-view.component';
import { MaterialModule } from '../material/material.module';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';


const routes:Route[]=[
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthFormComponent},
  {path:'contact',component:ContactComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'profile',component:ProfileComponent}
]
@NgModule({
  declarations: [
    ToolbarViewComponent,
    HomeComponent,
    AuthFormComponent,
    ContactComponent,
    ExperienceComponent,
    ProfileComponent
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
