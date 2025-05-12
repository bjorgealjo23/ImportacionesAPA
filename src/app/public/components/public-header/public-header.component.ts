import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, CommonModule, AvatarModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {
  items = [
    { label: 'Inicio', command: () => this.Home()},
    { label: 'Cotización' },
    { label: 'Sobre nosotros'},
    { label: 'Contáctanos', icon: 'pi pi-comments', command: () => this.irAContacto() }
  ];


  irAContacto() {
    // Lógica para navegar o mostrar sección
    console.log('Ir a Contactanos');
  }

  Home () {
    console.log(`si se precioan`)
  }


}
