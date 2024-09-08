import { Injectable } from '@angular/core';
import { clients, IClient } from './client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private client : IClient [] = clients

  constructor() { }

  getAll(){
    return this.client;
  }

  getOne(clientId : string){
    return this.client.find( client => client.id == clientId )
  }

}
