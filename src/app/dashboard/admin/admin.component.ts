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

  sidebarVisible:boolean = true;

  changeVisibilidad () {
    this.sidebarVisible = !this.sidebarVisible;
    console.log(this.sidebarVisible)
  }


}
