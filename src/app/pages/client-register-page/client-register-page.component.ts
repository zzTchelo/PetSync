import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from "../../components/default-home-page/default-home-page.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ClientService } from '../../services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register-page',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, HttpClientModule],
  providers: [provideNgxMask(), ClientService],
  templateUrl: './client-register-page.component.html',
  styleUrl: './client-register-page.component.css'
})
export class ClientRegisterPageComponent implements OnInit {

  imageSrc: string | ArrayBuffer | null = 'https://fakeimg.pl/100x100';
  formClient! : FormGroup;

  constructor(
    private clientService : ClientService,
    private formbuilder : FormBuilder,
    private router : Router
  ){}

  ngOnInit(): void {
    this.formClient = this.formbuilder.group({
      clientName : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      clientEmail : ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      clientCPF : ['', Validators.compose([
        Validators.required
      ])],
      clientDateBirth : ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  sendClient(){
    if (this.formClient.valid){
      const formData = {
        ...this.formClient.value,
        clientImage: this.imageSrc
      };

      this.clientService.post(formData).subscribe(() => {
        console.log('Cliente cadastrado com sucesso!!!');
        this.router.navigate(['/clients'])
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.imageSrc = base64String;
    };

    reader.onerror = (error) => {
      console.error('Erro ao ler o arquivo', error);
    };

    reader.readAsDataURL(file);
  }

  enableButton() : string{
    if(this.formClient.valid)
      return 'enabled-button';
    else
      return 'disabled-button';
  }


}
