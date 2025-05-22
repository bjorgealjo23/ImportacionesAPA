import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { dataToTable } from './data';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    ButtonModule,
    CommonModule,
    InputTextareaModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    HttpClientModule,
    TableModule
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent implements OnInit, OnDestroy {
  @ViewChild('tableWrapper', { static: false }) tableWrapper!: ElementRef;

  // Variables existentes
  value: any;
  date2: any;
  customers!: any[];
  first = 0;
  rows = 10;

  // Variables para el ancho responsivo
  tableWidth: string = '400px';
  scrollBarWidth: number = 0;

  // Breakpoints para diferentes dispositivos
  private breakpoints = {
    mobile: 576,
    tablet: 768,
    laptop: 1024,
    desktop: 1200
  };

  constructor() {}

  ngOnInit() {
    this.customers = dataToTable;
    this.calculateTableWidth();
    this.detectScrollbarWidth();
  }

  ngOnDestroy() {
    // Cleanup si es necesario
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calculateTableWidth();
  }

  // Calcula el ancho de la tabla según el dispositivo
  calculateTableWidth() {
    const screenWidth = window.innerWidth;
    let baseWidth: number;

    if (screenWidth <= this.breakpoints.mobile) {
      // Móviles: 400px o 95% del ancho de pantalla
      baseWidth = Math.min(400, screenWidth * 0.95);
    } else if (screenWidth <= this.breakpoints.tablet) {
      // Tablets: 767px o 90% del ancho de pantalla
      baseWidth = Math.min(767, screenWidth * 0.90);
    } else if (screenWidth <= this.breakpoints.laptop) {
      // Laptops: 1023px o 85% del ancho de pantalla
      baseWidth = Math.min(1023, screenWidth * 0.85);
    } else {
      // Desktop: 1200px o 80% del ancho de pantalla
      baseWidth = Math.min(1200, screenWidth * 0.80);
    }

    // Resta el ancho del scrollbar si existe
    const finalWidth = baseWidth - this.scrollBarWidth;
    this.tableWidth = `${Math.max(finalWidth, 350)}px`; // Mínimo 350px
  }

  // Detecta el ancho del scrollbar del navegador
  detectScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    (outer.style as any).msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    this.scrollBarWidth = (outer.offsetWidth - inner.offsetWidth);
    document.body.removeChild(outer);
  }

  // Obtiene el estilo dinámico para la tabla
  getTableStyle() {
    return {
      'width': this.tableWidth,
      'max-width': '100%'
    };
  }

  // Métodos de paginación existentes
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === this.customers.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  // Métodos para las acciones de la tabla
  editCustomer(customer: any) {
    console.log('Editando:', customer);
    // Implementa tu lógica de edición aquí
  }

  deleteCustomer(customer: any) {
    console.log('Eliminando:', customer);
    // Implementa tu lógica de eliminación aquí
    // Ejemplo: this.customers = this.customers.filter(c => c.id !== customer.id);
  }
}
