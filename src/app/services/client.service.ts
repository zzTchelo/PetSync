import { Injectable } from '@angular/core';
import { clients, IClient } from '../models/client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private client : IClient [] = clients

  constructor() { }

  getAll(){
    return this.client;
  }

  getOne(clientName : string){
    return this.client.find( client => client.clientName == clientName )
  }

}
