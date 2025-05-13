import { Component, Input } from '@angular/core';

export interface IItemCard {
  icon: string;
  subtittle: string;
  description:string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() newItem: IItemCard = {
    icon: '',
    subtittle: '',
    description: ''
  };

}
