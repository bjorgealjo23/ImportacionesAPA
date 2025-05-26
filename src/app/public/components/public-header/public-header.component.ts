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
    if (!this.activeSection) {
      this.activeSection = '';
    }
  }

  items = [
    { label: 'Inicio', route: 'home', path: '/' },
    { label: 'Cotización', route: 'cotizacion', path: '/cotizacion' },
    { label: 'Sobre Nosotros', route: 'nosotros', path: '/nosotros' },
  ];

  isActiveItem(route: string): boolean {
    return this.activeSection === route;
  }

  // Navegación suave a las secciones
  // navigateToSection(route: string, path: string): void {
  //   this.isMenuOpen = false; 

  //   if (
  //     this.router.url.startsWith('/acceso') ||
  //     this.router.url.startsWith('/admin')
  //   ) {
  //     this.router.navigate([path]);
  //   } else {
  //     this.router.navigate([path]).then(() => {
  //       if (this.isBrowser) {
  //         setTimeout(() => {
  //           const section = document.getElementById(route);
  //           if (section) {
  //             const headerHeight = 120;
  //             console.log(section)
  //             // console.log(section.offsetTop)
  //             const previusSectioTop = section.offsetTop + 15;
  //             const sectionTop = previusSectioTop - headerHeight;
  //             window.scrollTo({
  //               top: sectionTop,
  //               behavior: 'smooth',
  //             });
  //           }
  //         }, 100);
  //       }
  //     });
  //   }
  // }


  navigateToSection(route: string, path: string): void {
  this.isMenuOpen = false;

  this.router.navigateByUrl(path).then(() => {
    if (this.isBrowser && !this.router.url.startsWith('/acceso') && !this.router.url.startsWith('/admin')) {
      setTimeout(() => {
        const section = document.getElementById(route);
        if (section) {
          const headerHeight = 120;
          const sectionTop = section.offsetTop - headerHeight + 15;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  });
}


  irInicioSesion(): void {
    this.isMenuOpen = false;
    this.router.navigate(['/acceso/inicio']);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }



}
