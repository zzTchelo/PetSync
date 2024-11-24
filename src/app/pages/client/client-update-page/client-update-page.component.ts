import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from "../../../components/default-home-page/default-home-page.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ClientService } from '../../../services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-update',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule, CommonModule, NgxMaskDirective, HttpClientModule],
  providers: [provideNgxMask(), ClientService],
  templateUrl: './client-update-page.component.html',
  styleUrl: './client-update-page.component.css'
})
export class ClientUpdateComponent implements OnInit{

  imageSrc: string | ArrayBuffer | null = 'https://fakeimg.pl/100x100';
  formClient: FormGroup;
  clientId: string | null = '';

  constructor(
    private clientService: ClientService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.formClient = this.formbuilder.group({
      clientName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      clientEmail: ['', Validators.compose([Validators.required, Validators.email])],
      clientCPF: ['', Validators.compose([Validators.required])],
      clientDateBirth: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.clientService.getOne(this.clientId!).subscribe((client) => {
      this.imageSrc = client.clientImage;
      this.formClient.patchValue({
        clientName: client.clientName,
        clientEmail: client.clientEmail,
        clientCPF: client.clientCPF,
        clientDateBirth: client.clientDateBirth
      });
    });
  }

  updateClient(){
    if (this.formClient.valid){
      const formData = {
        ...this.formClient.value,
        clientImage: this.imageSrc,
        id: this.clientId
      };

      this.clientService.put(formData).subscribe(() => {
        console.log('Cliente atualizado com sucesso!!!');
        this.router.navigate(['/clients']);
      });
    }
  }

  deleteClient(){
    if (this.clientId){
      this.clientService.delete(this.clientId).subscribe(() => {
        console.log('Cliente excluido com sucesso!!!');
        this.router.navigate(['/clients']);
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

  enableButton() : string {
    return this.formClient.valid ? 'enabled-button' : 'disabled-button';
  }
}
