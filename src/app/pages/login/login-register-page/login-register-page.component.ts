import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotifyService } from '../../../services/notify.service';
import { UserService } from '../../../services/user.service';  // Importa o UserService


@Component({
  selector: 'app-login-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [NotifyService, UserService],  // Inclui o UserService nos providers
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css'],
})
export class LoginRegisterPageComponent {

  public cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private notifyService: NotifyService, private userService: UserService, private route : Router) {
    this.cadastroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onCadastrar() {
    if (this.cadastroForm.valid) {
      // Obtemos os dados do formulário
      const { name, email, password } = this.cadastroForm.value;

      // Envia os dados para o backend para registrar o usuário
      this.userService.post({ name, email, password }).subscribe({
        next: () => {
          this.notifyService.show('Cadastro realizado com sucesso!', 'Fechar', 3000);
          this.route.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erro ao registrar usuário:', err);
          this.notifyService.show('Ocorreu um erro ao registrar. Tente novamente.', 'Fechar', 3000);
        }
      });
    } else {
      this.notifyService.show('Por favor, preencha o formulário corretamente.', 'Fechar', 3000);
    }
  }

  onVoltar(){
    this.route.navigate(['/login']);
  }

}
