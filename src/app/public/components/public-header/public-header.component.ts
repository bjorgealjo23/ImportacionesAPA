import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, CommonModule, AvatarModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
  @Input() activeSection: string = 'home';

  isMenuOpen: boolean = false;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Asegurar que activeSection tenga un valor por defecto
    if (!this.activeSection) {
      this.activeSection = 'home';
    }
  }

  items = [
    { label: 'Inicio', route: 'home', path: '/' },
    { label: 'Cotización', route: 'cotizacion', path: '/cotizacion' },
    { label: 'Sobre Nosotros', route: 'nosotros', path: '/nosotros' },
  ];

  // Método para verificar si un item está activo
  isActiveItem(route: string): boolean {
    return this.activeSection === route;
  }

  // Navegación suave a las secciones
  navigateToSection(route: string, path: string): void {
    this.isMenuOpen = false; // Cerrar menú en móvil

    if (
      this.router.url.startsWith('/acceso') ||
      this.router.url.startsWith('/admin')
    ) {
      // Si estamos en otra página, navegar normalmente
      this.router.navigate([path]);
    } else {
      // Si estamos en landing, actualizar URL y hacer scroll
      this.router.navigate([path]).then(() => {
        if (this.isBrowser) {
          setTimeout(() => {
            const section = document.getElementById(route);
            if (section) {
              const headerHeight = 120;
              const sectionTop = section.offsetTop - headerHeight;

              window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
              });
            }
          }, 100);
        }
      });
    }
  }

  // Navegación a contactanos
  navigateToContact(): void {
    this.isMenuOpen = false;

    if (
      this.router.url.startsWith('/acceso') ||
      this.router.url.startsWith('/admin')
    ) {
      this.router.navigate(['/contactanos']);
    } else {
      this.router.navigate(['/contactanos']).then(() => {
        if (this.isBrowser) {
          setTimeout(() => {
            const section = document.getElementById('contactanos');
            if (section) {
              const headerHeight = 120;
              const sectionTop = section.offsetTop - headerHeight;

              window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
              });
            }
          }, 100);
        }
      });
    }
  }

  irInicioSesion(): void {
    this.isMenuOpen = false;
    this.router.navigate(['/acceso/inicio']);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
