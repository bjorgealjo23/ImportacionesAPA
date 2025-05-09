import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent, PublicFooterComponent } from './../components'

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, PublicHeaderComponent, PublicFooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}


