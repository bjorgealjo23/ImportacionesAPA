import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  @Input() isMobile: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private router:Router){}


  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }

  onGoLogin() {
    this.router.navigate(['/acceso/inicio']);
  }


}
