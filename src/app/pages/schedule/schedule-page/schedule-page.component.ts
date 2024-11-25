import { NotifyService } from './../../../services/notify.service';
import { Component, OnInit } from '@angular/core';
import { DefaultHomePageComponent } from "../../../components/default-home-page/default-home-page.component";
import { ISchedule } from '../../../models/schedule';
import { ScheduleService } from '../../../services/schedule.service';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
registerLocaleData(localePT);

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [DefaultHomePageComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css'
})
export class SchedulePageComponent implements OnInit{

  clients: any[] = []; // Lista de clientes
  pets: any[] = []; // Lista de pets do cliente selecionado

  schedules: ISchedule[] = [];
  newSchedule: ISchedule = { clientName: '', petName: '', dateScheduled: '' };
  isEditing: boolean = false;
  editSchedule: any;//ISchedule | null = { clientName: '', petName: '', dateScheduled: '' };

  constructor(private scheduleService: ScheduleService, private notify : NotifyService) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getAll().subscribe({
      next: (data) => this.schedules = data,
      error: (err) => console.error('Error loading schedules', err)
    });
  }

  addSchedule(): void {
    if(!this.newSchedule.clientName || !this.newSchedule.petName){
      this.notify.show('Preencha os dados corretamente', 'Fechar', 3000)
      return ;
    }

    this.scheduleService.post(this.newSchedule).subscribe({
      next: (schedule) => {
        this.schedules.push(schedule);
        this.newSchedule = { clientName: '', petName: '', dateScheduled: '' };
      },
      error: (err) => console.error('Error adding schedule', err)
    });
  }

  startEdit(schedule: ISchedule): void {
    this.isEditing = true;
    this.editSchedule = { ...schedule };
  }

  saveEdit(): void {
    if (!this.editSchedule) return;
    this.scheduleService.put(this.editSchedule).subscribe({
      next: (updatedSchedule) => {
        const index = this.schedules.findIndex(s => s.id === updatedSchedule.id);
        if (index !== -1) this.schedules[index] = updatedSchedule;
        this.isEditing = false;
        this.editSchedule = null;
      },
      error: (err) => console.error('Error updating schedule', err)
    });
  }

  deleteSchedule(id: any): void {
    this.scheduleService.delete(id).subscribe({
      next: () => this.schedules = this.schedules.filter(s => s.id !== id),
      error: (err) => console.error('Error deleting schedule', err)
    });
  }

  // Carregar lista de clientes
  loadClients(): void {
    this.scheduleService.getClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => console.error('Erro ao carregar clientes', err)
    });
  }

  // Carregar pets para o cliente selecionado
  loadPetsForClient(clientName: string | undefined): void {
    const selectedClient = this.clients.find(client => client.name === clientName);
    if (selectedClient) {
      this.pets = selectedClient.pets || []; // Supondo que cada cliente tenha uma lista de pets
    } else {
      this.pets = [];
    }
  }

}
