import { Component } from '@angular/core';
import { DefaultHomePageComponent } from '../default-home-page/default-home-page.component';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [DefaultHomePageComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {

}
