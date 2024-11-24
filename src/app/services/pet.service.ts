import { Injectable } from '@angular/core';
import { IPet } from '../models/pet';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly API : string = 'http://localhost:3000/pets';

  constructor(
    private http : HttpClient
  ) {}

  getAll() : Observable<IPet[]>{
    return this.http.get<IPet[]>(this.API).pipe(take(1));
  }

  getByID(petId : string){
    const url = `${this.API}/${petId}`;
    return this.http.get<IPet>(url).pipe(take(1));
  }

  post(pet : IPet) : Observable<IPet>{
    return this.http.post<IPet>(this.API, pet);
  }

  put(pet : IPet) : Observable<IPet>{
    const url = `${this.API}/${pet.id}`;
    return this.http.put<IPet>(url, pet);
  }

  delete(id : string) : Observable<IPet>{
    const url = `${this.API}/${id}`;
    return this.http.delete<IPet>(url);
  }

}
