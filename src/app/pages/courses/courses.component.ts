import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/interfaces/curso.interface';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: Curso[] = [
    {
      date: 'Noviembre 11, 2023',
      title: 'Git+GitHub: Todo un sistema de control de versiones de cero',
      certificateUrl: 'https://cursos.devtalles.com/certificates/bgyevufaap',
      tech: [
        { name: 'Git', logo: '/icons/git.svg' },
        { name: 'GitHub', logo: '/icons/github_light.svg' },
      ],
    },
    {
      date: 'Noviembre 20, 2023',
      title: 'JavaScript Moderno: Guía para dominar el idioma',
      certificateUrl: 'https://cursos.devtalles.com/certificates/kexmuijhyf',
      tech: [
        { name: 'JavaScript', logo: '/icons/javascript.svg' },
        { name: 'Vite', logo: '/icons/vite.svg' },
      ],
    },
    {
      date: 'Noviembre 26, 2023',
      title: 'TypeScript: Tu completa guía y manual de mano',
      certificateUrl: 'https://cursos.devtalles.com/certificates/btiignzhpb',
      tech: [{ name: 'TypeScript', logo: '/icons/typescript.svg' }],
    },
    {
      date: 'Noviembre 28, 2023',
      title: 'Principios SOLID y Clean Code',
      certificateUrl: 'https://cursos.devtalles.com/certificates/s17vg774yc',
      tech: [
        { name: 'Vite', logo: '/icons/vite.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
      ],
    },
    {
      date: 'Diciembre 13, 2023',
      title: 'SQL de cero: Tu guía práctica con PostgreSQL',
      certificateUrl: 'https://cursos.devtalles.com/certificates/m5ez6kwi3a',
      tech: [
        { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Enero 24, 2024',
      title: 'Node.Js: De cero a experto',
      certificateUrl: 'https://cursos.devtalles.com/certificates/3kj05k91sx',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/ugqjzeblat',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/icfl1m2jwl',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/xxaor6d2h2',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/ngihoc8hka',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'riverpod', logo: '/icons/riverpod.svg' },
      ],
    },
    {
      date: 'Abril 15, 2024',
      title: 'NestJS + Microservicios: Aplicaciones escalables y modulares',
      certificateUrl: 'https://cursos.devtalles.com/certificates/irmcjis4tb',
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
        { name: 'Google', logo: '/icons/google_cloud.svg' },
      ],
    },
    {
      date: 'Mayo 2, 2024',
      title: 'Aprende Programación Backend en C# .NET',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-3c19d245-df15-47ee-afb8-f1c860eaaedb/',
      tech: [
        { name: 'C#', logo: '/icons/csharp.svg' },
        { name: 'ASP', logo: '/icons/dotnet.svg' },
        { name: 'SQL Server', logo: '/icons/sql-server.svg' },
      ],
    },
    {
      date: 'Mayo 6, 2024',
      title: 'ReactiveX - RxJs: De cero hasta los detalles',
      certificateUrl: 'https://cursos.devtalles.com/certificates/ajeqyvap3g',
      tech: [
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Rxjs', logo: '/icons/rxjs.svg' },
      ],
    },
    {
      date: 'Mayo 9, 2024',
      title: 'Flutter – Móvil: Recursos Nativos',
      certificateUrl: 'https://cursos.devtalles.com/certificates/nkkxcrstqv',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'riverpod', logo: '/icons/riverpod.svg' },
      ],
    },
    {
      date: 'Mayo 12, 2024',
      title: 'Docker: Guía práctica de uso para desarrolladores',
      certificateUrl: 'https://cursos.devtalles.com/certificates/54qgewgtwu',
      tech: [
        { name: 'Docker', logo: '/icons/docker.svg' },
        { name: 'Kubernetes', logo: '/icons/kubernetes.svg' },
        { name: 'Nginx', logo: '/icons/nginx.svg' },
      ],
    },
    {
      date: 'Mayo 29, 2024',
      title: 'Flutter – Móvil: Diseños profesionales y animaciones',
      certificateUrl: 'https://cursos.devtalles.com/certificates/tzsxfglovi',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
      ],
    },
    {
      date: 'Julio 29, 2024',
      title: 'NestJs + Reportes: Genera PDFs desde Node',
      certificateUrl: 'https://cursos.devtalles.com/certificates/qxpu4wdhfo',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Docker', logo: '/icons/docker.svg' },
      ],
    },
    {
      date: 'Agosto 8, 2024',
      title: 'Nest + GraphQL: Evoluciona tus APIs',
      certificateUrl: 'https://cursos.devtalles.com/certificates/rhoio7rjii',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/wujmo3p24o',
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
      date: 'Agosto 27, 2024',
      title: 'OpenAI: Ejercicios y asistentes con Angular + NestJS',
      certificateUrl: 'https://cursos.devtalles.com/certificates/dadl3s5o1e',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/pmar95bhf9',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/tavnb6l34a',
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
      certificateUrl: 'https://cursos.devtalles.com/certificates/ambsctervm',
      tech: [
        { name: 'Vue', logo: '/icons/vue.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Tailwind', logo: '/icons/tailwindcss.svg' },
        { name: 'DaisyUI', logo: '/icons/daisyui.svg' },
        { name: 'Vitest', logo: '/icons/vitest.svg' },
        { name: 'TanStack Query', logo: '/icons/tanstack.svg' },
        { name: 'Pinia', logo: '/icons/pinia.svg' },
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
      ],
    },
    {
      date: 'Junio 5, 2025',
      title: 'NestJS + Testing: Pruebas unitarias y end to end (e2e)',
      certificateUrl: 'https://cursos.devtalles.com/certificates/4uqkvuwbrp',
      tech: [
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'Jest', logo: '/icons/jest.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
      ],
    },
    {
      date: 'Junio 10, 2025',
      title: 'Flutter + Gemini: Aplicaciones con inteligencia artificial',
      certificateUrl: 'https://cursos.devtalles.com/certificates/j1z4owa1bf',
      tech: [
        { name: 'Flutter', logo: '/icons/flutter.svg' },
        { name: 'Dart', logo: '/icons/dart.svg' },
        { name: 'NestJS', logo: '/icons/nestjs.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
        { name: 'Gemini', logo: '/icons/gemini.svg' },
      ],
    },

    {
      date: 'En proceso',
      title: 'React: de cero a experto - Edición 2025',
      tech: [
        { name: 'React', logo: '/icons/react_light.svg' },
        { name: 'TypeScript', logo: '/icons/typescript.svg' },
      ],
    },
    // {
    //   date: 'En proceso',
    //   title: 'Qwik - Introducción al Framework',
    //   tech: [
    //     { name: 'Qwik', logo: '/icons/qwik.svg' },
    //     { name: 'TypeScript', logo: '/icons/typescript.svg' },
    //   ],
    // },
    // {
    //   date: 'En proceso',
    //   title: 'Python: Fundamentos hasta los detalles',
    //   tech: [{ name: 'Python', logo: '/icons/python.svg' }],
    // },
    // {
    //   date: 'En proceso',
    //   title: 'Java: Explora el lenguaje desde cero',
    //   tech: [{ name: 'Java', logo: '/icons/java.svg' }],
    // },
    // {
    //   date: 'En proceso',
    //   title: 'C#: Empieza tu camino en el lenguaje',
    //   tech: [{ name: 'C#', logo: '/icons/csharp.svg' }],
    // },
    // {
    //   date: 'En proceso',
    //   title: 'Patrones de Diseño: Soluciones prácticas y eficientes',
    //   tech: [
    //     { name: 'Deno', logo: '/icons/deno.svg' },
    //     { name: 'TypeScript', logo: '/icons/typescript.svg' },
    //   ],
    // },
    // {
    //   date: 'En proceso',
    //   title: 'Astro: El framework para sitios web orientados al contenido',
    //   tech: [
    //     { name: 'Astro', logo: '/icons/astro.svg' },
    //     { name: 'TypeScript', logo: '/icons/typescript.svg' },
    //   ],
    // },
  ];

  openCert(url: string): void {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
    this.courses = this.courses.reverse();
  }
}
