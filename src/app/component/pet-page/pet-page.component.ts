import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../default-home-page/default-home-page.component';
import { PetService } from './pet.service';
import { IPet } from './pet';
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
    this.allPets = this.petService.getAll();
    this.setPets = this.petService.getAll();
  }

  onTextChange(){
    this.allPets = this.setPets.filter((pet : IPet) => {
      return pet.name.toLowerCase().includes(this.filteredPets);
    })
  }

}
