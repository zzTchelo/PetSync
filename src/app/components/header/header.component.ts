import { CommonModule,registerLocaleData  } from '@angular/common';
import { Component } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

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

  constructor(private loginService : UserService, private route : Router){
    if(this.loginService.isLoggedIn() == false)
      this.route.navigate(['/login']);
  }

  onLogout(){
    this.loginService.logout();
    this.route.navigate(['/login']);
  }

}
