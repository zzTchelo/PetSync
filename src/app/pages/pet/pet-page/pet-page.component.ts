import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { PetService } from '../../../services/pet.service';
import { IPet } from '../../../models/pet';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-pet-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './pet-page.component.html',
  styleUrl: './pet-page.component.css'
})
export class PetPageComponent implements OnInit{

  public allPets : IPet [] = [];
  private setPets : IPet [] = [];
  filteredPets : string = '';

  constructor(
    private petService : PetService
  ){}

  ngOnInit(): void {

  }

  onTextChange(){
    this.allPets = this.setPets.filter((pet : IPet) => {
      return pet.petName.toLowerCase().includes(this.filteredPets);
    })
  }
}
