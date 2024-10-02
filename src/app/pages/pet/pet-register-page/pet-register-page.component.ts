import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from '../../../services/pet.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pet-register-page',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [PetService],
  templateUrl: './pet-register-page.component.html',
  styleUrl: './pet-register-page.component.css'
})
export class PetRegisterPageComponent implements OnInit{

  imageSrc: string | ArrayBuffer | null = 'https://fakeimg.pl/100x100';
  formPet! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private petService : PetService,
    private route : Router
  ){}

  ngOnInit(): void {
    this.formPet = this.formBuilder.group({
      petName : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      petBreed : ['', Validators.compose([
        Validators.required
      ])],
      animalType : ['', Validators.compose([
        Validators.required
      ])],
      petDateBirth : ['', Validators.compose([
        Validators.required
      ])]
    });

  }

  sendPet(){
    if(this.formPet.valid){
      const formData = {
        ...this.formPet.value,
        petImage : this.imageSrc,

      }

      this.petService.post(formData).subscribe(() => {
        console.log("Pet Cadastrado com sucesso!!!");
        this.route.navigate(["/pets"]);
      })
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
    if(this.formPet.valid)
      return 'enabled-button';
    else
      return 'disabled-button';
  }
}
