import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../../../components/default-home-page/default-home-page.component';
import { CommonModule, NgFor } from '@angular/common';
import { IClient } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, CommonModule, FormsModule, HttpClientModule, RouterModule],
  providers: [ClientService],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})

export class ClientPageComponent implements OnInit{

  public allClients : IClient [] = [];
  private setClients : IClient [] = [];
  filteredClients : string = '';

  constructor(
    private clientService : ClientService,
  ){}

  ngOnInit(): void {
    this.clientService.getAll().subscribe((client) => {
      this.allClients = client;
      this.setClients = client;
    });
  }

  onTextChange(){
    this.allClients = this.setClients.filter((client : IClient) => {
      return client.clientName.toLowerCase().includes(this.filteredClients);
    })
  }
}
