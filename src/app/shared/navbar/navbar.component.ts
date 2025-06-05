import { Component, HostListener, OnInit } from '@angular/core';
import { fadeAnimation } from '../../core/utils/route-animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CustomRouterLink {
  routerLink: string;
  routeTitle: string;
}
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  animations: [fadeAnimation],
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  isMobile = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth < 768;

    if (!this.isMobile) this.closeMenu();
  }

  ngOnInit(): void {
    this.onResize();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  routes: CustomRouterLink[] = [
    {
      routerLink: '/',
      routeTitle: 'Inicio',
    },
    {
      routerLink: '/sobre-mi',
      routeTitle: 'Sobre mí',
    },
    {
      routerLink: '/experiencia',
      routeTitle: 'Experiencia',
    },
    {
      routerLink: '/proyectos',
      routeTitle: 'Proyectos',
    },
    {
      routerLink: '/tecnologias',
      routeTitle: 'Tecnologías',
    },
    {
      routerLink: '/cursos',
      routeTitle: 'Cursos',
    },
    {
      routerLink: '/contacto',
      routeTitle: 'Contacto',
    },
  ];

  getAnimationState(outlet: any) {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
