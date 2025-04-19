import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { fadeAnimation } from '../../core/utils/route-animations';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  animations: [fadeAnimation],
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  getAnimationState(outlet: any) {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
