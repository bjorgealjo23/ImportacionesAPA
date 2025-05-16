import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

export interface embarqueProp {
  id: number;
  numero: number;
  precio: number;
  cantidad: number;
  peso: number;
}

@Component({
  selector: 'app-formulario-cotizacion',
  standalone: true,
  imports: [CardModule, InputTextModule, CommonModule, FloatLabelModule, ButtonModule, InputNumberModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario-cotizacion.component.html',
  styleUrl: './formulario-cotizacion.component.scss'
})
export class FormularioCotizacionComponent {
  value: any;
  lstEmbarques: embarqueProp[] = [];


  ngOnInit(): void {

    this.lstEmbarques = [{
      id: this.generarId(),
      numero: 1,
      precio: 0,
      cantidad: 0,
      peso: 0
    }];

  }
  generarId(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  agregarNuevoEmbarque() {
    this.lstEmbarques = [... this.lstEmbarques, {
      id: this.generarId(),
      numero: this.lstEmbarques.length + 1,
      precio: 0,
      cantidad: 0,
      peso: 0
    }]
  }

  eliminarFilaEmbarque(id: number) {
    if (this.lstEmbarques.length > 1) {
      const index = this.lstEmbarques.findIndex(item => item.id === id);
      if (index !== -1) {
        this.lstEmbarques.splice(index, 1);
        this.lstEmbarques = [...this.lstEmbarques];
      }
    }
  }






}
