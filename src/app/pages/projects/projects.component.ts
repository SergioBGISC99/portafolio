import { Component } from '@angular/core';
import { Proyecto } from '../../core/interfaces/proyecto.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  proyectos: Proyecto[] = [
    {
      title: 'Diócesis de Ciudad Obregón',
      description:
        'Plataforma web desarrollada para la Diócesis de Ciudad Obregón. Incluye sistema de gestión de parroquias, decanatos, colonias y contenido público/administrativo.',
      publicUrl: 'https://diocesis-cd-obregon.netlify.app/home',
      adminUrl: 'https://diocesis-cd-obregon.netlify.app/login',
      tech: [
        { name: 'Angular', logo: '/icons/angular.svg' },
        { name: 'Angular Material', logo: '/icons/materialui.svg' },
        { name: 'Django', logo: '/icons/django.svg' },
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Cloudinary', logo: '/icons/cloudinary.svg' },
      ],
    },
  ];
}
