import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-formulario-cotizacion',
  standalone: true,
  imports: [CardModule,InputTextModule, CommonModule,FormsModule,FloatLabelModule,ButtonModule,InputNumberModule],
  templateUrl: './formulario-cotizacion.component.html',
  styleUrl: './formulario-cotizacion.component.scss'
})
export class FormularioCotizacionComponent {
    value:any ;
}
