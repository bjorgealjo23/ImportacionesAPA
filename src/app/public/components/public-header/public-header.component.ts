import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [MenubarModule,BadgeModule,CommonModule,AvatarModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {
items = [
  { label: 'Inicio', styleClass:'text-style' },
  { label: 'Cotización' , styleClass:'text-style'},
  { label: 'Sobre nosotros' , styleClass:'text-style'},
];
}
