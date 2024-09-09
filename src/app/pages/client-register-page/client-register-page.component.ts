import { Component } from '@angular/core';
import { DefaultHomePageComponent } from "../../components/default-home-page/default-home-page.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-register-page',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule],
  templateUrl: './client-register-page.component.html',
  styleUrl: './client-register-page.component.css'
})
export class ClientRegisterPageComponent {

}
