import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { ClientService } from '../../../services/client.service';
import { IClient } from '../../../models/client';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pet-register-page',
  templateUrl: './pet-register-page.component.html',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [PetService],
  styleUrls: ['./pet-register-page.component.css']
})
export class PetRegisterPageComponent implements OnInit {

  imageSrc: string | ArrayBuffer | null = 'https://fakeimg.pl/100x100';
  formPet!: FormGroup;
  clients: IClient[] = [];  // Lista de clientes para o combobox
  selectedClientId: string = '';  // ID do cliente selecionado

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private clientService: ClientService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // Carregar clientes ao inicializar
    this.clientService.getAll().subscribe((clients: IClient[]) => {
      this.clients = clients;
    });

    // Criar o formulário com um campo para o cliente
    this.formPet = this.formBuilder.group({
      petName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      petBreed: ['', [Validators.required]],
      animalType: ['', [Validators.required]],
      petDateBirth: ['', [Validators.required]],
      clientId: ['', [Validators.required]]  // Novo campo para selecionar o cliente
    });
  }

  sendPet(): void {
    if (this.formPet.valid) {
      const formData = {
        ...this.formPet.value,
        petImage: this.imageSrc,
      };

      this.petService.post(formData).subscribe({
        next: () => {
          console.log('Pet cadastrado com sucesso!');
          this.route.navigate(['/pets']);
          this.formPet.reset(); // Limpa o formulário após o envio
        },
        error: (err) => {
          console.error('Erro ao cadastrar pet', err);
          alert('Ocorreu um erro ao cadastrar o pet. Tente novamente.');
        }
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
      this.imageSrc = reader.result;
    };
    reader.onerror = (error) => {
      console.error('Erro ao ler o arquivo', error);
    };
    reader.readAsDataURL(file);
  }

}
