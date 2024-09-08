export interface IClient {
  id: string;
  clientName: string;
  clientDateOfBirth: string;
  petName: string;
  dateScheduled: string;
}

export const clients: IClient[] = [
  { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", clientName: "João Silva", clientDateOfBirth: "1980-05-14", petName: "Rex", dateScheduled: "2024-11-25" },
  { id: "7p6o5n4m-3l2k-1j0i-9h8g-7f6e5d4c3b2a", clientName: "Maria Fernandes", clientDateOfBirth: "1992-09-23", petName: "Luna", dateScheduled: "2024-12-10" },
  { id: "9x8y7z6w-5v4u-3t2s-1r0q-p9o8n7m6l5k4", clientName: "Pedro Santos", clientDateOfBirth: "1985-12-01", petName: "Thor", dateScheduled: "2024-11-30" },
  { id: "4k5l6m7n-8o9p-0q1r-2s3t-4u5v6w7x8y9z", clientName: "Ana Oliveira", clientDateOfBirth: "1990-03-17", petName: "Bella", dateScheduled: "2024-12-05" },
  { id: "2a3b4c5d-6e7f-8g9h-0i1j-k2l3m4n5o6p7", clientName: "Carlos Pereira", clientDateOfBirth: "1978-11-22", petName: "Max", dateScheduled: "2024-12-15" },
  { id: "3b4c5d6e-7f8g-9h0i-1j2k-l3m4n5o6p7q8", clientName: "Laura Costa", clientDateOfBirth: "1988-07-30", petName: "Mia", dateScheduled: "2024-12-20" },
  { id: "4c5d6e7f-8g9h-0i1j-2k3l-m4n5o6p7q8r9", clientName: "Ricardo Almeida", clientDateOfBirth: "1982-06-14", petName: "Charlie", dateScheduled: "2024-11-28" },
  { id: "5d6e7f8g-9h0i-1j2k-3l4m-n5o6p7q8r9s0", clientName: "Fernanda Silva", clientDateOfBirth: "1995-01-12", petName: "Lola", dateScheduled: "2024-12-01" },
  { id: "6e7f8g9h-0i1j-2k3l-4m5n-o6p7q8r9s0t1", clientName: "Gustavo Lima", clientDateOfBirth: "1989-10-05", petName: "Nina", dateScheduled: "2024-12-08" },
  { id: "7f8g9h0i-1j2k-3l4m-5n6o-p7q8r9s0t1u2", clientName: "Patrícia Santos", clientDateOfBirth: "1991-04-23", petName: "Rocky", dateScheduled: "2024-11-22" },
  { id: "8g9h0i1j-2k3l-4m5n-6o7p-q8r9s0t1u2v3", clientName: "Eduardo Pereira", clientDateOfBirth: "1977-08-19", petName: "Daisy", dateScheduled: "2024-12-12" },
  { id: "9h0i1j2k-3l4m-5n6o-7p8q-r9s0t1u2v3w4", clientName: "Isabela Rodrigues", clientDateOfBirth: "1994-11-11", petName: "Buddy", dateScheduled: "2024-12-03" },
  { id: "0i1j2k3l-4m5n-6o7p-8q9r-s0t1u2v3w4x5", clientName: "Tiago Martins", clientDateOfBirth: "1986-02-16", petName: "Sasha", dateScheduled: "2024-11-29" },
  { id: "1j2k3l4m-5n6o-7p8q-9r0s-t1u2v3w4x5y6", clientName: "Juliana Costa", clientDateOfBirth: "1993-12-30", petName: "Rex", dateScheduled: "2024-12-18" },
  { id: "2k3l4m5n-6o7p-8q9r-0s1t-u2v3w4x5y6z", clientName: "Felipe Almeida", clientDateOfBirth: "1984-09-09", petName: "Bella", dateScheduled: "2024-12-07" },
  { id: "3l4m5n6o-7p8q-9r0s-1t2u-v3w4x5y6z7a", clientName: "Sabrina Fernandes", clientDateOfBirth: "1991-06-05", petName: "Luna", dateScheduled: "2024-11-26" },
  { id: "4m5n6o7p-8q9r-0s1t-2u3v-w4x5y6z7a8b", clientName: "André Silva", clientDateOfBirth: "1980-04-15", petName: "Thor", dateScheduled: "2024-12-09" },
  { id: "5n6o7p8q-9r0s-1t2u-3v4w-x5y6z7a8b9c", clientName: "Letícia Costa", clientDateOfBirth: "1989-07-25", petName: "Mia", dateScheduled: "2024-11-27" }
];
