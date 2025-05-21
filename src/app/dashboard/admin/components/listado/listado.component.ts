import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  imports: [InputTextModule,InputNumberModule,FloatLabelModule,ButtonModule,CommonModule,InputTextareaModule,
    FormsModule,RouterModule, CalendarModule, HttpClientModule,TableModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {
  value:any;
  date2:any;

   customers!: any[];

    first = 0;

    rows = 10;

    constructor() {}

    ngOnInit() {
        this.customers = dataToTable;
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event:any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }






}
