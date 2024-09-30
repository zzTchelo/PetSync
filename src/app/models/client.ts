import { v4 as uuidv4 } from 'uuid';

export interface IClient {
  id: string;
  clientName: string;
  clientDateBirth: string;
  //pet: string;
  clientImage: string;
  clientEmail: string;
  clientCPF: string;
  //clientAddress: string;
}

/*
export const clients: IClient[] = [
  { id: uuidv4(), clientName: "João Silva", clientDateOfBirth: "1980-05-14", pet: "Rex", dateScheduled: "2024-11-25" },
  { id: uuidv4(), clientName: "Maria Fernandes", clientDateOfBirth: "1992-09-23", pet: "Luna", dateScheduled: "2024-12-10" },
  { id: uuidv4(), clientName: "Pedro Santos", clientDateOfBirth: "1985-12-01", pet: "Thor", dateScheduled: "2024-11-30" },
  { id: uuidv4(), clientName: "Ana Oliveira", clientDateOfBirth: "1990-03-17", pet: "Bella", dateScheduled: "2024-12-05" },
  { id: uuidv4(), clientName: "Carlos Pereira", clientDateOfBirth: "1978-11-22", pet: "Max", dateScheduled: "2024-12-15" },
  { id: uuidv4(), clientName: "Laura Costa", clientDateOfBirth: "1988-07-30", pet: "Mia", dateScheduled: "2024-12-20" },
  { id: uuidv4(), clientName: "Ricardo Almeida", clientDateOfBirth: "1982-06-14", pet: "Charlie", dateScheduled: "2024-11-28" },
  { id: uuidv4(), clientName: "Fernanda Silva", clientDateOfBirth: "1995-01-12", pet: "Lola", dateScheduled: "2024-12-01" },
  { id: uuidv4(), clientName: "Gustavo Lima", clientDateOfBirth: "1989-10-05", pet: "Nina", dateScheduled: "2024-12-08" },
  { id: uuidv4(), clientName: "Patrícia Santos", clientDateOfBirth: "1991-04-23", pet: "Rocky", dateScheduled: "2024-11-22" },
  { id: uuidv4(), clientName: "Eduardo Pereira", clientDateOfBirth: "1977-08-19", pet: "Daisy", dateScheduled: "2024-12-12" },
  { id: uuidv4(), clientName: "Isabela Rodrigues", clientDateOfBirth: "1994-11-11", pet: "Buddy", dateScheduled: "2024-12-03" },
  { id: uuidv4(), clientName: "Tiago Martins", clientDateOfBirth: "1986-02-16", pet: "Sasha", dateScheduled: "2024-11-29" },
  { id: uuidv4(), clientName: "Juliana Costa", clientDateOfBirth: "1993-12-30", pet: "Rex", dateScheduled: "2024-12-18" },
  { id: uuidv4(), clientName: "Felipe Almeida", clientDateOfBirth: "1984-09-09", pet: "Bella", dateScheduled: "2024-12-07" },
  { id: uuidv4(), clientName: "Sabrina Fernandes", clientDateOfBirth: "1991-06-05", pet: "Luna", dateScheduled: "2024-11-26" },
  { id: uuidv4(), clientName: "André Silva", clientDateOfBirth: "1980-04-15", pet: "Thor", dateScheduled: "2024-12-09" },
  { id: uuidv4(), clientName: "Letícia Costa", clientDateOfBirth: "1989-07-25", pet: "Mia", dateScheduled: "2024-11-27" }
];
*/
