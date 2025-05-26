import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

export interface IItemImage {
  name: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, TagModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent  {
  @Input() lstImagenes: IItemImage[] = [];
}