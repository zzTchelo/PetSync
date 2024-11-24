import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router, private notifyService : NotifyService) {}

  onLogin(): void {
    this.userService.login(this.username, this.password).subscribe({
      next: (user) => {
        // Se o login for bem-sucedido, redireciona para a página inicial
        this.router.navigate(['/schedules']);
      },
      error: (err) => {
        this.notifyService.show(err.message, 'Fechar', 3000);  // Exibe um erro caso as credenciais estejam incorretas
      }
    });
  }

}
