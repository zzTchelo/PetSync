import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../default-home-page/default-home-page.component';
import { CommonModule, NgFor } from '@angular/common';
import { IClient } from './client';
import { ClientService } from './client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})

export class ClientPageComponent implements OnInit{

  public allClients : IClient [] | undefined = [];
  private setClients : IClient [] = [];
  filteredClients : string = '';

  constructor(
    private clientService : ClientService
  ){}

  ngOnInit(): void {
    this.allClients = this.clientService.getAll();
    this.setClients = this.clientService.getAll();
  }

  onTextChange(){
    this.allClients = this.setClients.filter((client : IClient) => {
      return client.clientName.toLowerCase().includes(this.filteredClients);
    })
  }
}
