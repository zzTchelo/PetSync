import { Component } from '@angular/core';
import { DefaultHomePageComponent } from '../default-home-page/default-home-page.component';

@Component({
  selector: 'app-pet-page',
  standalone: true,
  imports: [DefaultHomePageComponent],
  templateUrl: './pet-page.component.html',
  styleUrl: './pet-page.component.css'
})
export class PetPageComponent {

}
