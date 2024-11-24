import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-pet-update-page',
  standalone: true,
  imports: [DefaultHomePageComponent, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './pet-update-page.component.html',
  styleUrl: './pet-update-page.component.css'
})
export class PetUpdatePageComponent {

  imageSrc: string | ArrayBuffer | null = 'https://fakeimg.pl/100x100';
  formPet! : FormGroup;
  petId : string | null = '';

  constructor(
    private formBuilder : FormBuilder,
    private petService : PetService,
    private router : Router,
    private route: ActivatedRoute
  ){
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

  ngOnInit(): void {
    this.petId = this.route.snapshot.paramMap.get('id');
    this.petService.getByID(this.petId!).subscribe((pet) => {
      this.imageSrc = pet.petImage;
      this.formPet.patchValue({
        petName : pet.petName,
        petBreed : pet.petBreed,
        animalType : pet.petBreed,
        petDateBirth : pet.petDateBirth
      });
    });
  }

  updatePet(){
    if(this.formPet.valid){
      const formData = {
        ...this.formPet.value,
        petImage : this.imageSrc,
        id : this.petId,
      }

      this.petService.put(formData).subscribe(() => {
        console.log("Pet Atualizado com sucesso!!!");
        this.router.navigate(["/pets"]);
      })
    }
  }

  deletePet(){
    if (this.petId){
      this.petService.delete(this.petId).subscribe(() => {
        console.log('Pet excluído com sucesso!')
      });
    }
    this.router.navigate(["/pets"]);
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
