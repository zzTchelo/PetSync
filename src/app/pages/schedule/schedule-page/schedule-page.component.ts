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
export class SchedulePageComponent implements OnInit {

  clients: any[] = []; // Lista de clientes
  pets: any[] = []; // Lista de pets do cliente selecionado

  schedules: ISchedule[] = [];
  newSchedule: ISchedule = { clientName: '', petName: '', dateScheduled: '' };
  isEditing: boolean = false;
  editSchedule: ISchedule = { clientName: '', petName: '', dateScheduled: '' }; // Corrigido para garantir que seja do tipo ISchedule

  constructor(private scheduleService: ScheduleService, private notify: NotifyService) {}

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
    if (!this.newSchedule.clientName || !this.newSchedule.petName || !this.newSchedule.dateScheduled) {
      this.notify.show('Preencha os dados corretamente', 'Fechar', 3000);
      return;
    }

    console.log(this.newSchedule);
    this.scheduleService.post(this.newSchedule).subscribe({
      next: (schedule) => {
        this.schedules.push(schedule);
        this.newSchedule = { clientName: '', petName: '', dateScheduled: '' }; // Corrigido para os campos corretos
      },
      error: (err) => console.error('Erro ao adicionar agendamento', err)
    });
  }

  startEdit(schedule: ISchedule): void {
    this.isEditing = true;
    this.editSchedule = { ...schedule }; // Atribuindo os dados corretos do agendamento para edição
  }

  saveEdit(): void {
    if (!this.editSchedule) return;
    this.scheduleService.put(this.editSchedule).subscribe({
      next: (updatedSchedule) => {
        const index = this.schedules.findIndex(s => s.id === updatedSchedule.id);
        if (index !== -1) this.schedules[index] = updatedSchedule;
        this.isEditing = false;
        this.editSchedule = { clientName: '', petName: '', dateScheduled: '' }; // Resetando após salvar
      },
      error: (err) => console.error('Error updating schedule', err)
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editSchedule = { clientName: '', petName: '', dateScheduled: '' }; // Resetando ao cancelar
  }

  deleteSchedule(id: any): void {
    this.scheduleService.delete(id).subscribe({
      next: () => this.schedules = this.schedules.filter(s => s.id !== id),
      error: (err) => console.error('Error deleting schedule', err)
    });
  }

  loadClients(): void {
    this.scheduleService.getClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => console.error('Erro ao carregar clientes', err)
    });
  }

  loadPetsForClient(clientId: string): void {
    this.scheduleService.getPetsByClient(clientId).subscribe({
      next: (data) => {
        console.log('Pets carregados:', data);
        this.pets = data; // Atualizando pets conforme o cliente selecionado
      },
      error: (err) => {
        console.error('Erro ao carregar pets', err);
        this.pets = []; // Definindo lista vazia caso ocorra um erro
      },
    });
  }
}
