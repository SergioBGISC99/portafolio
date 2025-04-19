import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'tecnologias', component: TecnologiesComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'contacto', component: ContactComponent },
];
