import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardFooterComponent, DashboardHeaderComponent, DashboardSidebarComponent } from '../../shared/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, DashboardHeaderComponent, DashboardSidebarComponent, DashboardFooterComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']  // corregido: es styleUrls (plural)
})
export class AdminComponent implements OnInit {

  sidebarVisible: boolean = true;
  isMobile: boolean = false;

  constructor() {
    // no llamar aquí checkScreenSize, porque puede ejecutarse fuera del navegador
  }

  ngOnInit() {
    // solo aquí que ya estamos en Angular (en navegador)
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
    }
  }

  private checkScreenSize() {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMobile = window.innerWidth < 1024;

    if (this.isMobile && this.sidebarVisible) {
      this.sidebarVisible = false;
    } else if (!this.isMobile && !this.sidebarVisible) {
      this.sidebarVisible = true;
    }
  }

  changeVisibilidad() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log(this.sidebarVisible);
  }

  closeSidebar() {
    if (this.isMobile) {
      this.sidebarVisible = false;
    }
  }
}
