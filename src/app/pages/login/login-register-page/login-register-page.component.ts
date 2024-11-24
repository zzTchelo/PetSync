import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css'],
})
export class LoginRegisterPageComponent implements OnInit {

  public cadastroForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Form Data:', this.cadastroForm.value);
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }

  ngOnInit() {
  }

}
