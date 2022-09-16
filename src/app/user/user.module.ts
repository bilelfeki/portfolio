import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarViewComponent } from './toolbar-view';
import { MaterialModule } from '../material/material.module';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthFormComponent } from './auth-form';
import { ContactComponent } from './contact';
import { ExperienceComponent } from './experience';
import { ProfileComponent } from './profile';
import { ExperienceRowComponent } from './experience';
import { ExperienceChoisesComponent } from './experience';
import { ProjectsComponent } from './projects';
import { SkillsComponent } from './skills/skills.component';
import { ProjectRowComponent } from './projects';
import { ProjectChoisesComponent } from './projects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileFormComponent } from './profile';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';


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
    ImageCropperModule,
    ReactiveFormsModule
  ],
  exports:[
    ToolbarViewComponent
  ]
})
export class AdminModule { }
