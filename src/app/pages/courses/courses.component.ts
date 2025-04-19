import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso } from '../../core/interfaces/curso.interface';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: Curso[] = [
    {
      date: 'Noviembre 11, 2023',
      title: 'Git+GitHub: Todo un sistema de control de versiones de cero',
      tech: [
        { name: 'Git', logo: '/icons/git.svg' },
        { name: 'GitHub', logo: '/icons/github_light.svg' },
      ],
    },
    {
      date: 'Noviembre 20, 2023',
      title: 'JavaScript Moderno: Guía para dominar el idioma',
      tech: [
        { name: 'JavaScript', logo: '/icons/javascript.svg' },
        { name: 'Vite', logo: '/icons/vite.svg' },
      ],
    },
    {
      date: 'Noviembre 26, 2023',
      title: 'TypeScript: Tu completa guía y manual de mano',
      tech: [{ name: 'TypeScript', logo: '/icons/typescript.svg' }],
    },
    {
      date: 'Diciembre 13, 2023',
      title: 'SQL de cero: Tu guía práctica con PostgreSQL',
      tech: [
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Enero 24, 2024',
      title: 'Node.Js: De cero a experto',
      tech: [
        { name: 'Node', logo: '/icons/node.svg' },
        { name: 'Express.js', logo: '/icons/expressjs.svg' },
        { name: 'JavaScript', logo: '/icons/javascript.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Prisma', logo: '/icons/prisma.svg' },
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Mongoose', logo: '/icons/mongoose.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
        { name: 'Jest', logo: '/icons/jest.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
        { name: 'JWT', logo: '/icons/jwt.svg' },
      ],
    },
    {
      date: 'Enero 26, 2024',
      title: 'Node – Autenticación Rest con Clean Architecture',
      tech: [
        { name: 'Node', logo: '/icons/node.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Mongoose', logo: '/icons/mongoose.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Febrero 21, 2024',
      title: 'Nest: Desarrollo backend escalable con Node',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Vite', logo: '/icons/vite.svg' },
        { name: 'JWT', logo: '/icons/jwt.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Febrero 29, 2024',
      title: 'Flutter – Móvil: De cero a experto',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'bloc', logo: '/icons/bloc.svg' },
        { name: 'riverpod', logo: '/icons/riverpod.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Abril 11, 2024',
      title: 'Mini-Curso: Riverpod providers con anotaciones',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'riverpod', logo: '/icons/riverpod.svg' },
      ],
    },
    {
      date: 'Abril 15, 2024',
      title: 'NestJS + Microservicios: Aplicaciones escalables y modulares',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'SQLite', logo: '/icons/sqlite.svg' },
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
        { name: 'Prisma', logo: '/icons/prisma.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
        { name: 'Kubernetes', logo: '/icons/kubernetes.svg' },
        { name: 'Git', logo: '/icons/git.svg' },
        { name: 'GitHub', logo: '/icons/github_light.svg' },
        { name: 'Google Cloud', logo: '/icons/google-cloud.svg' },
      ],
    },
    {
      date: 'Mayo 2, 2024',
      title: 'Aprende Programación Backend en C# .NET',
      tech: [
        { name: 'C#', logo: '/icons/csharp.svg' },
        { name: 'ASP', logo: '/icons/dotnet.svg' },
        { name: 'SQL Server', logo: '/icons/sql-server.svg' },
      ],
    },
    {
      date: 'Mayo 9, 2024',
      title: 'Flutter – Móvil: Recursos Nativos',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'riverpod', logo: '/icons/riverpod.svg' },
      ],
    },
    {
      date: 'Mayo 12, 2024',
      title: 'Docker: Guía práctica de uso para desarrolladores',
      tech: [
        { name: 'Docker', logo: '/icons/docker.svg' },
        { name: 'Kubernetes', logo: '/icons/kubernetes.svg' },
        { name: 'Nginx', logo: '/icons/nginx.svg' },
      ],
    },
    {
      date: 'Mayo 29, 2024',
      title: 'Flutter – Móvil: Diseños profesionales y animaciones',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
      ],
    },
    {
      date: 'Julio 29, 2024',
      title: 'NestJs + Reportes: Genera PDFs desde Node',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Agosto 8, 2024',
      title: 'Nest + GraphQL: Evoluciona tus APIs',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'GraphQL', logo: '/icons/graphql.svg' },
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Agosto 19, 2024',
      title: 'Angular: De cero a experto',
      tech: [
        { name: 'Angular', logo: '/icons/angular.svg' },
        { name: 'Tailwind', logo: '/icons/tailwindcss.svg' },
        { name: 'Angular Material', logo: '/icons/materialui.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
      ],
    },
    {
      date: 'Aug 27, 2024',
      title: 'OpenAI: Ejercicios y asistentes con Angular + NestJS',
      tech: [
        { name: 'Angular', logo: '/icons/angular.svg' },
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Tailwind', logo: '/icons/tailwindcss.svg' },
        { name: 'OpenAI', logo: '/icons/openai.svg' },
      ],
    },
    {
      date: 'Octubre 8, 2024',
      title: 'Angular Pro: Lleva tus bases al siguiente nivel',
      tech: [
        { name: 'Angular', logo: '/icons/angular.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'TanStack Query', logo: '/icons/tanstack.svg' },
        { name: 'Tailwind', logo: '/icons/tailwindcss.svg' },
        { name: 'Karma', logo: '/icons/karma.svg' },
      ],
    },
    {
      date: 'Octubre 16, 2024',
      title: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'Express.js', logo: '/icons/expressjs.svg' },
        { name: 'JavaScript', logo: '/icons/javascript.svg' },
        { name: 'MongoDB', logo: '/icons/mongodb.svg' },
        { name: 'GetX', logo: '/icons/getx.svg' },
        { name: 'bloc', logo: '/icons/bloc.svg' },
      ],
    },
    {
      date: 'Octubre 30, 2024',
      title: 'Vue.js - de Cero a Experto: Composition Api',
      tech: [
        { name: 'Vue', logo: '/icons/vue.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Vitest', logo: '/icons/vitest.svg' },
        { name: 'TanStack Query', logo: '/icons/tanstack.svg' },
        { name: 'Pinia', logo: '/icons/pinia.svg' },
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
      ],
    },
  ];
}
