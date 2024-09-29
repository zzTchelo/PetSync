import { Injectable } from '@angular/core';
import { IClient } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private readonly API : string = 'http://localhost:3000/clients';
  constructor(
    private http : HttpClient
  ) { }

  post(client : IClient) : Observable<IClient>{
    return this.http.post<IClient>(this.API, client)
  }

  getAll() : Observable<IClient[]>{
    return this.http.get<IClient[]>(this.API).pipe(take(1));
  }

  getOne(clientId : string) : Observable<IClient>{
    return this.http.get<IClient>(`${this.API}/${clientId}`).pipe(take(1))
  }

}
