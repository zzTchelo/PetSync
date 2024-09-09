import { CommonModule,registerLocaleData  } from '@angular/common';
import { Component } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

registerLocaleData(localePT);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  public currentDate : Date = new Date();
}
