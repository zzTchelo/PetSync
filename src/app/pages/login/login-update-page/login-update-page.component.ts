import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { Router } from '@angular/router';
import { IUser } from '../../../models/user';
import { NotifyService } from '../../../services/notify.service';


@Component({
  selector: 'app-login-update-page',
  templateUrl: './login-update-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, DefaultHomePageComponent],
  providers: [NotifyService, UserService],
  styleUrls: ['./login-update-page.component.css']
})
export class LoginUpdatePageComponent implements OnInit {
  alterarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notify : NotifyService
  ) {
    this.alterarForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.carregarDadosUsuario();
  }

  carregarDadosUsuario(): void {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);

    if (currentUser) {
      this.alterarForm.patchValue({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        password: '', // Senha deve ser redefinida pelo usuário
      });
    } else {
      this.notify.show('Usuário não encontrado!', 'Fechar', 3000);
      this.router.navigate(['/']); // Redirecionar se não houver usuário
    }
  }

  onAlterar(): void {
    if (this.alterarForm.valid) {
      const user: IUser = this.alterarForm.value;
      this.userService.put(user).subscribe({
        next: () => {
          this.notify.show('Dados alterados com sucesso!', 'Fechar', 3000);
          this.router.navigate(['/schedules']); // Redirecionar após salvar
        },
        error: (err) => {
          console.error(err);
          this.notify.show('Erro ao salvar alterações!', 'Fechar', 3000);
        },
      });
    }
  }

  onVoltar(): void {
    this.router.navigate(['/schedules']); // Ajuste para a rota correta
  }

}


