import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PublicHeaderComponent, PublicFooterComponent } from './../components'
import { ContactanosComponent, CotizacionComponent, HomeComponent, NosotrosComponent } from './components';
import { filter, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [PublicHeaderComponent, PublicFooterComponent, HomeComponent, CotizacionComponent, NosotrosComponent, ContactanosComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild('mainContent', { static: true }) mainContent!: ElementRef;

  activeSection: string = '';
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
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.handleRouteChange(event.url);
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupScrollSpy();
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
    const route = url.split('/')[1] || '';
    this.activeSection = route;
    this.isNavigating = true;
    setTimeout(() => {
      this.isNavigating = false;
    }, 1000);
  }

  private setupScrollSpy(): void {
    if (!this.isBrowser) return;

    const sections = ['home', 'cotizacion', 'nosotros', 'contactanos'];

    const checkActiveSection = () => {
      const scrollPosition = window.scrollY + 105;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (this.activeSection !== sections[i]) {
            this.activeSection = sections[i];
            if (!this.isNavigating) {
              const newUrl = sections[i] === '' ? '/' : `/${sections[i]}`;
              this.router.navigate([newUrl], { replaceUrl: true });
            }
          }
          break;
        }
      }
    };
    window.addEventListener('scroll', checkActiveSection, { passive: true });
    this.scrollSubscription = new Subscription(() => {
      window.removeEventListener('scroll', checkActiveSection);
    });
  }
}


