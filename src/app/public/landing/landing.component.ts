import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PublicHeaderComponent, PublicFooterComponent } from './../components'
import { ContactanosComponent, CotizacionComponent, HomeComponent, NosotrosComponent } from './components';
import { filter, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ PublicHeaderComponent, PublicFooterComponent, HomeComponent, CotizacionComponent,NosotrosComponent,ContactanosComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, OnDestroy, AfterViewInit  {


  @ViewChild('mainContent', { static: true }) mainContent!: ElementRef;

  activeSection: string = 'home';
  private isNavigating: boolean = false;
  private routerSubscription?: Subscription;
  private scrollSubscription?: Subscription;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Escuchar cambios de ruta para scroll automático
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.handleRouteChange(event.url);
        }
      });
  }

  ngAfterViewInit(): void {
    // Solo configurar scroll spy si estamos en el navegador
    if (this.isBrowser) {
      this.setupScrollSpy();

      // Manejar la ruta inicial
      this.handleRouteChange(this.router.url);
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private handleRouteChange(url: string): void {
    const route = url.split('/')[1] || 'home';
    this.activeSection = route;

    // Marcar que estamos navegando para evitar conflictos con scroll spy
    this.isNavigating = true;

    // Scroll suave a la sección correspondiente
    setTimeout(() => {
      this.scrollToSection(route);
      // Restaurar el scroll spy después del scroll
      setTimeout(() => {
        this.isNavigating = false;
      }, 1000);
    }, 100);
  }

  private scrollToSection(sectionId: string): void {
    if (!this.isBrowser) return;

    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 120; // Ajusta según la altura de tu header
      const sectionTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }

  private setupScrollSpy(): void {
    if (!this.isBrowser) return;

    const sections = ['home', 'cotizacion', 'nosotros', 'contactanos'];

    // Función para detectar qué sección está visible
    const checkActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset para activar antes

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (this.activeSection !== sections[i]) {
            this.activeSection = sections[i];
            // Solo actualizar la URL si no estamos navegando activamente
            if (!this.isNavigating) {
              const newUrl = sections[i] === 'home' ? '/' : `/${sections[i]}`;
              this.router.navigate([newUrl], { replaceUrl: true });
            }
          }
          break;
        }
      }
    };

    // Escuchar el evento de scroll
    window.addEventListener('scroll', checkActiveSection, { passive: true });

    // Cleanup cuando se destruya el componente
    this.scrollSubscription = new Subscription(() => {
      window.removeEventListener('scroll', checkActiveSection);
    });
  }





}


