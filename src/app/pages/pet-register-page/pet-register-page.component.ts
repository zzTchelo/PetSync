import { Component } from '@angular/core';
import { DefaultHomePageComponent } from '../../components/default-home-page/default-home-page.component';

@Component({
  selector: 'app-pet-register-page',
  standalone: true,
  imports: [DefaultHomePageComponent],
  templateUrl: './pet-register-page.component.html',
  styleUrl: './pet-register-page.component.css'
})
export class PetRegisterPageComponent {

}
