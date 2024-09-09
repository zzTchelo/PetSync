import { v4 as uuidv4 } from 'uuid';

export interface IClient {
  id: string;
  clientName: string;
  clientDateOfBirth: string;
  petName: string;
  dateScheduled: string;

  //clientCPF: string;
  //clientAddress: string;
  //clientImage: string;
  //clientEmail: string;
}

export const clients: IClient[] = [
  { id: uuidv4(), clientName: "João Silva", clientDateOfBirth: "1980-05-14", petName: "Rex", dateScheduled: "2024-11-25" },
  { id: uuidv4(), clientName: "Maria Fernandes", clientDateOfBirth: "1992-09-23", petName: "Luna", dateScheduled: "2024-12-10" },
  { id: uuidv4(), clientName: "Pedro Santos", clientDateOfBirth: "1985-12-01", petName: "Thor", dateScheduled: "2024-11-30" },
  { id: uuidv4(), clientName: "Ana Oliveira", clientDateOfBirth: "1990-03-17", petName: "Bella", dateScheduled: "2024-12-05" },
  { id: uuidv4(), clientName: "Carlos Pereira", clientDateOfBirth: "1978-11-22", petName: "Max", dateScheduled: "2024-12-15" },
  { id: uuidv4(), clientName: "Laura Costa", clientDateOfBirth: "1988-07-30", petName: "Mia", dateScheduled: "2024-12-20" },
  { id: uuidv4(), clientName: "Ricardo Almeida", clientDateOfBirth: "1982-06-14", petName: "Charlie", dateScheduled: "2024-11-28" },
  { id: uuidv4(), clientName: "Fernanda Silva", clientDateOfBirth: "1995-01-12", petName: "Lola", dateScheduled: "2024-12-01" },
  { id: uuidv4(), clientName: "Gustavo Lima", clientDateOfBirth: "1989-10-05", petName: "Nina", dateScheduled: "2024-12-08" },
  { id: uuidv4(), clientName: "Patrícia Santos", clientDateOfBirth: "1991-04-23", petName: "Rocky", dateScheduled: "2024-11-22" },
  { id: uuidv4(), clientName: "Eduardo Pereira", clientDateOfBirth: "1977-08-19", petName: "Daisy", dateScheduled: "2024-12-12" },
  { id: uuidv4(), clientName: "Isabela Rodrigues", clientDateOfBirth: "1994-11-11", petName: "Buddy", dateScheduled: "2024-12-03" },
  { id: uuidv4(), clientName: "Tiago Martins", clientDateOfBirth: "1986-02-16", petName: "Sasha", dateScheduled: "2024-11-29" },
  { id: uuidv4(), clientName: "Juliana Costa", clientDateOfBirth: "1993-12-30", petName: "Rex", dateScheduled: "2024-12-18" },
  { id: uuidv4(), clientName: "Felipe Almeida", clientDateOfBirth: "1984-09-09", petName: "Bella", dateScheduled: "2024-12-07" },
  { id: uuidv4(), clientName: "Sabrina Fernandes", clientDateOfBirth: "1991-06-05", petName: "Luna", dateScheduled: "2024-11-26" },
  { id: uuidv4(), clientName: "André Silva", clientDateOfBirth: "1980-04-15", petName: "Thor", dateScheduled: "2024-12-09" },
  { id: uuidv4(), clientName: "Letícia Costa", clientDateOfBirth: "1989-07-25", petName: "Mia", dateScheduled: "2024-11-27" }
];
