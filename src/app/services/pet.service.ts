import { Injectable } from '@angular/core';
import { IPet } from '../models/pet';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly API = '';

  constructor(
    private http : HttpClientModule
  ) {}

  getAll(){
    return ;
  }

  getByID(petId : string){
    return ;
  }

  post(pet : IPet){
    return ;
  }

  put(pet : IPet){
    return ;
  }

  delete(id : string){
    return ;
  }

}
