import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ISchedule } from '../models/schedule';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private readonly API: string = 'http://localhost:3000/schedules'; // Substitua pelo ambiente de produção

  constructor(private http: HttpClient) {}

  /**
   * Cria um novo agendamento.
   * @param schedule Agendamento a ser criado.
   * @returns Observable do agendamento criado.
   */
  post(schedule: ISchedule): Observable<ISchedule> {
    return this.http.post<ISchedule>(this.API, schedule).pipe(
      catchError(err => {
        console.error('Error creating schedule:', err);
        throw new Error('Failed to create schedule');
      })
    );
  }

  /**
   * Atualiza um agendamento existente.
   * @param schedule Agendamento com os dados atualizados.
   * @returns Observable do agendamento atualizado.
   */
  put(schedule: ISchedule): Observable<ISchedule> {
    if (!schedule.id) throw new Error('Schedule ID is required for update');
    const url = `${this.API}/${schedule.id}`;
    return this.http.put<ISchedule>(url, schedule).pipe(
      catchError(err => {
        console.error('Error updating schedule:', err);
        throw new Error('Failed to update schedule');
      })
    );
  }

  /**
   * Exclui um agendamento pelo ID.
   * @param scheduleId ID do agendamento a ser excluído.
   * @returns Observable indicando a exclusão.
   */
  delete(scheduleId: string): Observable<void> {
    const url = `${this.API}/${scheduleId}`;
    return this.http.delete<void>(url).pipe(
      catchError(err => {
        console.error('Error deleting schedule:', err);
        throw new Error('Failed to delete schedule');
      })
    );
  }

  /**
   * Obtém todos os agendamentos.
   * @returns Observable com a lista de agendamentos.
   */
  getAll(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.API).pipe(
      take(1),
      catchError(err => {
        console.error('Error fetching schedules:', err);
        throw new Error('Failed to fetch schedules');
      })
    );
  }

  /**
   * Obtém um agendamento pelo ID.
   * @param scheduleId ID do agendamento a ser obtido.
   * @returns Observable do agendamento.
   */
  getOne(scheduleId: string): Observable<ISchedule> {
    return this.http.get<ISchedule>(`${this.API}/${scheduleId}`).pipe(
      take(1),
      catchError(err => {
        console.error('Error fetching schedule:', err);
        throw new Error('Failed to fetch schedule');
      })
    );
  }

  getClients(): Observable<any[]> {
    const url = 'http://localhost:3000/clients'; // Endpoint para buscar os clientes
    return this.http.get<any[]>(url).pipe(
      catchError(error => {
        console.error('Erro ao buscar clientes:', error);
        return throwError(() => new Error('Erro ao buscar clientes'));
      })
    );
  }

}
