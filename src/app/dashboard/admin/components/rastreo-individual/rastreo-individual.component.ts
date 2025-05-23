import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-rastreo-individual',
  standalone: true,
  imports: [InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    ButtonModule,
    CommonModule,
    FormsModule],
  templateUrl: './rastreo-individual.component.html',
  styleUrl: './rastreo-individual.component.scss'
})
export class RastreoIndividualComponent {
  value: any;
}
