import { Injectable } from '@angular/core';
import { IPet, pets } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets : IPet [] = pets;

  constructor() {}

  getAll(){
    return this.pets;
  }

  getOne(petId : string){
    return this.pets.find(pet => pet.id == petId);
  }

}
