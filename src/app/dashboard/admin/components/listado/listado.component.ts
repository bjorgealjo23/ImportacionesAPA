import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
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
// --- estos son para el modal
import { DialogModule } from 'primeng/dialog';

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
    TableModule,
    DialogModule,
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
})
export class ListadoComponent {
  // Variables existentes
  value: any;
  date2: any;
  customers!: any[];
  first = 0;
  rows = 10;

  visible: boolean = false;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  showDialog() {
    // if (isPlatformBrowser(this.platformId)) {
      this.visible = true;
    // }
  }

  ngOnInit(): void {
    this.customers = dataToTable;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
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
  }

  showMapa(numero: string) {
    this.showDialog();
  }

  showDetail(id: string) {
    alert(id);
  }
}
