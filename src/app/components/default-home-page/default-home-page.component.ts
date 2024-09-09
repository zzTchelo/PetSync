import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-home-page',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './default-home-page.component.html',
  styleUrl: './default-home-page.component.css'
})
export class DefaultHomePageComponent {

}
