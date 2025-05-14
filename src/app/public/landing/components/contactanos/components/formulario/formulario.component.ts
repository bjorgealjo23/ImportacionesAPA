import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CardModule,InputTextModule, CommonModule,FormsModule,FloatLabelModule,ButtonModule,InputNumberModule,InputTextareaModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
value:any;
}
