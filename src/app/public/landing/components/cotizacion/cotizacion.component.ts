import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [CardModule,InputTextModule, CommonModule,FormsModule,FloatLabelModule,ButtonModule],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.scss'
})
export class CotizacionComponent {

  value:any ;

}
