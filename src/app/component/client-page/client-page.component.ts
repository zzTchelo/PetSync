import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from '../default-home-page/default-home-page.component';
import { CommonModule, NgFor } from '@angular/common';
import { IClient } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, CommonModule],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})

export class ClientPageComponent implements OnInit{

  public clients : IClient [] = [];

  constructor(
    private clientService : ClientService
  ){}

  ngOnInit(): void {
    this.clients = this.clientService.getAll();
  }

}
