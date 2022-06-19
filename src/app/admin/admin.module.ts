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
import { ExperienceRowComponent } from './experience/experience-row/experience-row.component';
import { ExperienceChoisesComponent } from './experience/experience-choises/experience-choises.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectRowComponent } from './projects/project-row/project-row.component';
import { ProjectChoisesComponent } from './projects/project-choises/project-choises.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { ImageCropperModule } from 'ngx-image-cropper';


const routes:Route[]=[
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthFormComponent},
  {path:'contact',component:ContactComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'profile',component:ProfileComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'forms/profile',component:ProfileFormComponent}


]
@NgModule({
  declarations: [
    ToolbarViewComponent,
    HomeComponent,
    AuthFormComponent,
    ContactComponent,
    ExperienceComponent,
    ProfileComponent,
    ExperienceRowComponent,
    ExperienceChoisesComponent,
    ProjectsComponent,
    ProjectRowComponent,
    ProjectChoisesComponent,
    ProfileFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ImageCropperModule
  ],
  exports:[
    ToolbarViewComponent
  ]
})
export class AdminModule { }
