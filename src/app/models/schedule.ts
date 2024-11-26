export interface ISchedule {
  id?: string; // ID do agendamento
  clientId?: string; // ID do cliente
  clientName?: string; // Nome do cliente
  petId?: string; // ID do pet
  petName?: string; // Nome do pet
  dateScheduled: string; // Data e hora do agendamento
}
