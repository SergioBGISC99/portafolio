import { Component } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    TecnologiesComponent,
    CoursesComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portafolio-sergio';
}
