import { Component } from '@angular/core';

interface Technologies {
  imgSource: string;
  alternativeText: string;
}

@Component({
  selector: 'app-tecnologies',
  imports: [],
  templateUrl: './tecnologies.component.html',
})
export class TecnologiesComponent {
  frontend: Technologies[] = [
    { imgSource: '/icons/angular.svg', alternativeText: 'Angular' },
    { imgSource: '/icons/vite.svg', alternativeText: 'Vite' },
    { imgSource: '/icons/vue.svg', alternativeText: 'Vue' },
    { imgSource: '/icons/materialui.svg', alternativeText: 'Angular Material' },
    { imgSource: '/icons/tailwindcss.svg', alternativeText: 'TalwindCSS' },
    { imgSource: '/icons/rxjs.svg', alternativeText: 'RxJS' },
  ];

  mobile: Technologies[] = [
    { imgSource: '/icons/flutter.svg', alternativeText: 'Flutter' },
  ];

  backend: Technologies[] = [
    { imgSource: '/icons/node.svg', alternativeText: 'Node.js' },
    { imgSource: '/icons/nestjs.svg', alternativeText: 'NestJS' },
    { imgSource: '/icons/expressjs.svg', alternativeText: 'Express.js' },
    { imgSource: '/icons/dotnet.svg', alternativeText: 'ASP.NET Web API' },
  ];

  database: Technologies[] = [
    { imgSource: '/icons/postgresql.svg', alternativeText: 'PostgreSQL' },
    { imgSource: '/icons/sql-server.svg', alternativeText: 'SQL Server' },
    { imgSource: '/icons/mongodb.svg', alternativeText: 'MongoDB' },
    { imgSource: '/icons/sqlite.svg', alternativeText: 'SQLite' },
  ];

  state_management: Technologies[] = [
    { imgSource: '/icons/tanstack.svg', alternativeText: 'TanStack Query' },
    { imgSource: '/icons/pinia.svg', alternativeText: 'Pinia' },
    { imgSource: '/icons/riverpod.svg', alternativeText: 'Riverpod' },
    { imgSource: '/icons/bloc.svg', alternativeText: 'Bloc' },
    { imgSource: '/icons/getx.svg', alternativeText: 'GetX' },
    { imgSource: '/icons/flutter.svg', alternativeText: 'Provider' },
  ];

  langs: Technologies[] = [
    { imgSource: '/icons/typescript.svg', alternativeText: 'TypeScript' },
    { imgSource: '/icons/javascript.svg', alternativeText: 'JavaScript' },
    { imgSource: '/icons/dart.svg', alternativeText: 'Dart' },
    { imgSource: '/icons/csharp.svg', alternativeText: 'C#' },
    { imgSource: '/icons/java.svg', alternativeText: 'Java' },
    { imgSource: '/icons/html5.svg', alternativeText: 'HTML' },
    { imgSource: '/icons/css.svg', alternativeText: 'CSS' },
  ];

  testing: Technologies[] = [
    { imgSource: '/icons/jest.svg', alternativeText: 'Jest' },
    { imgSource: '/icons/karma.svg', alternativeText: 'Karma' },
  ];

  tools: Technologies[] = [
    { imgSource: '/icons/git.svg', alternativeText: 'Git' },
    { imgSource: '/icons/github_light.svg', alternativeText: 'GitHub' },
    { imgSource: '/icons/prisma.svg', alternativeText: 'Prisma' },
    { imgSource: '/icons/mongoose.svg', alternativeText: 'Mongoose' },
    { imgSource: '/icons/dotnet.svg', alternativeText: 'Entity Framework' },
    { imgSource: '/icons/docker.svg', alternativeText: 'Docker' },
    { imgSource: '/icons/graphql.svg', alternativeText: 'GraphQL' },
    { imgSource: '/icons/dotnet.svg', alternativeText: 'LINQ' },
    { imgSource: '/icons/openai.svg', alternativeText: 'OpenAI API' },
    { imgSource: '/icons/jwt.svg', alternativeText: 'JWT' },
    { imgSource: '/icons/nginx.svg', alternativeText: 'Nginx' },
    { imgSource: '/icons/kubernetes.svg', alternativeText: 'Kubernetes' },
    { imgSource: '/icons/google_cloud.svg', alternativeText: 'Google Cloud' },
  ];
}
