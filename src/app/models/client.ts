import { v4 as uuidv4 } from 'uuid';

export interface IClient {
  id: string;
  clientName: string;
  clientDateOfBirth: string;
  pet: string;
  dateScheduled: string;

  clientCPF: string;
  clientAddress: string;
  clientImage: string;
  clientEmail: string;
}

export const clients: IClient[] = [
  {
    id: uuidv4(),
    clientName: "João Silva",
    clientDateOfBirth: "1980-05-14",
    pet: "Rex",
    dateScheduled: "2024-11-25",
    clientCPF: "123.456.789-00",
    clientAddress: "Rua A, 123",
    clientImage: "joao.jpg",
    clientEmail: "joao.silva@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Maria Fernandes",
    clientDateOfBirth: "1992-09-23",
    pet: "Luna",
    dateScheduled: "2024-12-10",
    clientCPF: "987.654.321-00",
    clientAddress: "Avenida B, 456",
    clientImage: "maria.jpg",
    clientEmail: "maria.fernandes@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Pedro Santos",
    clientDateOfBirth: "1985-12-01",
    pet: "Thor",
    dateScheduled: "2024-11-30",
    clientCPF: "123.789.456-11",
    clientAddress: "Rua C, 789",
    clientImage: "pedro.jpg",
    clientEmail: "pedro.santos@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Ana Oliveira",
    clientDateOfBirth: "1990-03-17",
    pet: "Bella",
    dateScheduled: "2024-12-05",
    clientCPF: "321.654.987-22",
    clientAddress: "Rua D, 101",
    clientImage: "ana.jpg",
    clientEmail: "ana.oliveira@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Carlos Pereira",
    clientDateOfBirth: "1978-11-22",
    pet: "Max",
    dateScheduled: "2024-12-15",
    clientCPF: "456.123.789-33",
    clientAddress: "Rua E, 102",
    clientImage: "carlos.jpg",
    clientEmail: "carlos.pereira@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Laura Costa",
    clientDateOfBirth: "1988-07-30",
    pet: "Mia",
    dateScheduled: "2024-12-20",
    clientCPF: "654.321.123-44",
    clientAddress: "Rua F, 103",
    clientImage: "laura.jpg",
    clientEmail: "laura.costa@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Ricardo Almeida",
    clientDateOfBirth: "1982-06-14",
    pet: "Charlie",
    dateScheduled: "2024-11-28",
    clientCPF: "321.456.654-55",
    clientAddress: "Rua G, 104",
    clientImage: "ricardo.jpg",
    clientEmail: "ricardo.almeida@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Fernanda Silva",
    clientDateOfBirth: "1995-01-12",
    pet: "Lola",
    dateScheduled: "2024-12-01",
    clientCPF: "789.654.321-66",
    clientAddress: "Rua H, 105",
    clientImage: "fernanda.jpg",
    clientEmail: "fernanda.silva@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Gustavo Lima",
    clientDateOfBirth: "1989-10-05",
    pet: "Nina",
    dateScheduled: "2024-12-08",
    clientCPF: "456.789.123-77",
    clientAddress: "Rua I, 106",
    clientImage: "gustavo.jpg",
    clientEmail: "gustavo.lima@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Patrícia Santos",
    clientDateOfBirth: "1991-04-23",
    pet: "Rocky",
    dateScheduled: "2024-11-22",
    clientCPF: "321.987.654-88",
    clientAddress: "Rua J, 107",
    clientImage: "patricia.jpg",
    clientEmail: "patricia.santos@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Eduardo Pereira",
    clientDateOfBirth: "1977-08-19",
    pet: "Daisy",
    dateScheduled: "2024-12-12",
    clientCPF: "123.654.987-99",
    clientAddress: "Rua K, 108",
    clientImage: "eduardo.jpg",
    clientEmail: "eduardo.pereira@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Isabela Rodrigues",
    clientDateOfBirth: "1994-11-11",
    pet: "Buddy",
    dateScheduled: "2024-12-03",
    clientCPF: "456.123.789-00",
    clientAddress: "Rua L, 109",
    clientImage: "isabela.jpg",
    clientEmail: "isabela.rodrigues@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Tiago Martins",
    clientDateOfBirth: "1986-02-16",
    pet: "Sasha",
    dateScheduled: "2024-11-29",
    clientCPF: "987.456.321-11",
    clientAddress: "Rua M, 110",
    clientImage: "tiago.jpg",
    clientEmail: "tiago.martins@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Juliana Costa",
    clientDateOfBirth: "1993-12-30",
    pet: "Rex",
    dateScheduled: "2024-12-18",
    clientCPF: "789.321.654-22",
    clientAddress: "Rua N, 111",
    clientImage: "juliana.jpg",
    clientEmail: "juliana.costa@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Felipe Almeida",
    clientDateOfBirth: "1984-09-09",
    pet: "Bella",
    dateScheduled: "2024-12-07",
    clientCPF: "123.456.789-33",
    clientAddress: "Rua O, 112",
    clientImage: "felipe.jpg",
    clientEmail: "felipe.almeida@example.com"
  },
  {
    id: uuidv4(),
    clientName: "Sabrina Fernandes",
    clientDateOfBirth: "1991-06-05",
    pet: "Luna",
    dateScheduled: "2024-11-26",
    clientCPF: "321.987.654-44",
    clientAddress: "Rua P, 113",
    clientImage: "sabrina.jpg",
    clientEmail: "sabrina.fernandes@example.com"
  },
  {
    id: uuidv4(),
    clientName: "André Silva",
    clientDateOfBirth: "1980-04-15",
    pet: "Thor",
    dateScheduled: "2024-12-09",
    clientCPF: "987.123.654-55",
    clientAddress: "Rua Q, 114",
    clientImage: "andre.jpg",
    clientEmail: "andre.silva@example.com"
  }
]
