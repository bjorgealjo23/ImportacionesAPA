import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  @Input() isMobile: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }
}
