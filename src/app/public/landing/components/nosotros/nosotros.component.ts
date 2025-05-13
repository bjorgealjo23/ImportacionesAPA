import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent, IItemCard,CarouselComponent, IItemImage } from './components';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ButtonModule,CardComponent,CarouselComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

  images: IItemImage[] = [
    { name: 'image-1.webp', alt: 'Image 1 description' },
    { name: 'image-2.webp', alt: 'Image 2 description' },
    { name: 'image-3.webp', alt: 'Image 3 description' },
    { name: 'image-4.webp', alt: 'Image 3 description' }
  ];

  // -- Para los Items de las caracterisitcas a favor
  pro1:IItemCard = {
    icon:'fas fa-shield-alt',
    subtittle:'Seguridad Garantizada',
    description:'Tus cargas están protegidas en todo momento, desde el origen hasta la entrega.'
  };

  pro2:IItemCard = {
    icon:'fas fa-map-marked-alt',
    subtittle:'Seguimiento en Tiempo Real',
    description:'Monitorea tu envío en cada etapa con actualizaciones constantes.'
  };

  pro3:IItemCard = {
    icon:'fas fa-headset',
    subtittle:'Soporte Personalizado',
    description:'Te acompañamos en todo el proceso: asesoría, trámites y logística.'
  };

  pro4:IItemCard = {
    icon:'fas fa-users',
    subtittle:'Clientes Satisfechos',
    description:'Los clientes son nuestra prioridad y los números nos dan la razón.'
  };



}
