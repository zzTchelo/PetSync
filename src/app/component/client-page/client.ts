export interface IClient {
  id: string;
  clientName: string;
  clientDateOfBirth: string;
  petName: string;
  dateScheduled: string;
}

export const clients: IClient[] = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    clientName: "João Silva",
    clientDateOfBirth: "1980-05-14",
    petName: "Rex",
    dateScheduled: "2024-11-25",
  },
  {
    id: "7p6o5n4m-3l2k-1j0i-9h8g-7f6e5d4c3b2a",
    clientName: "Maria Fernandes",
    clientDateOfBirth: "1992-09-23",
    petName: "Luna",
    dateScheduled: "2024-12-10",
  },
  {
    id: "9x8y7z6w-5v4u-3t2s-1r0q-p9o8n7m6l5k4",
    clientName: "Pedro Santos",
    clientDateOfBirth: "1985-12-01",
    petName: "Thor",
    dateScheduled: "2024-11-30",
  },
  {
    id: "4k5l6m7n-8o9p-0q1r-2s3t-4u5v6w7x8y9z",
    clientName: "Ana Oliveira",
    clientDateOfBirth: "1990-03-17",
    petName: "Bella",
    dateScheduled: "2024-12-05",
  }
];
