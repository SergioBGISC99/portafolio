import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  {
    path: 'sobre-mi',
    component: AboutComponent,
    data: { animation: 'SobreMi' },
  },
  {
    path: 'experiencia',
    component: ExperienceComponent,
    data: { animation: 'Experiencia' },
  },
  {
    path: 'proyectos',
    component: ProjectsComponent,
    data: { animation: 'Proyectos' },
  },
  {
    path: 'tecnologias',
    component: TecnologiesComponent,
    data: { animation: 'Tecnologias' },
  },
  {
    path: 'cursos',
    component: CoursesComponent,
    data: { animation: 'Cursos' },
  },
  {
    path: 'contacto',
    component: ContactComponent,
    data: { animation: 'Contacto' },
  },
];
