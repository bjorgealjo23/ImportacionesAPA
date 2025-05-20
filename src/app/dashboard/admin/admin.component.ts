import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardFooterComponent, DashboardHeaderComponent, DashboardSidebarComponent } from '../../shared/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, DashboardHeaderComponent, DashboardSidebarComponent, DashboardFooterComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  showSidebar:boolean = false;

  changeVisibilidad () {
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar)
  }


}
