import { CommonModule,registerLocaleData  } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  public currentDate : Date = new Date();
}
