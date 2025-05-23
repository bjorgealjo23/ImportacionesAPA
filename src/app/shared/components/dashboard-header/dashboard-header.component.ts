import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() sidebarVisible: boolean = true;
  @Input() isMobile: boolean = false;

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
