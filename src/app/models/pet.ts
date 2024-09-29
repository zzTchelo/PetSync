import { v4 as uuidv4 } from 'uuid';

export interface IPet {
  id: string;
  name: string;
  breed: string;
  animalType: string;
  birth: Date;
}

export const pets: IPet[] = [
  { id: uuidv4(), name: "Rex", breed: "Labrador", animalType: "Dog", birth: new Date("2021-05-15") },
  { id: uuidv4(), name: "Mia", breed: "Siamese", animalType: "Cat", birth: new Date("2020-11-20") },
  { id: uuidv4(), name: "Charlie", breed: "Beagle", animalType: "Dog", birth: new Date("2019-07-10") },
  { id: uuidv4(), name: "Luna", breed: "Golden Retriever", animalType: "Dog", birth: new Date("2021-03-05") },
  { id: uuidv4(), name: "Bella", breed: "Persian", animalType: "Cat", birth: new Date("2022-01-22") },
  { id: uuidv4(), name: "Max", breed: "German Shepherd", animalType: "Dog", birth: new Date("2020-12-30") },
  { id: uuidv4(), name: "Sasha", breed: "Rottweiler", animalType: "Dog", birth: new Date("2018-08-12") },
  { id: uuidv4(), name: "Nina", breed: "Sphynx", animalType: "Cat", birth: new Date("2021-09-15") },
  { id: uuidv4(), name: "Daisy", breed: "Poodle", animalType: "Dog", birth: new Date("2019-10-25") },
  { id: uuidv4(), name: "Rocky", breed: "Bulldog", animalType: "Dog", birth: new Date("2018-06-17") },
  { id: uuidv4(), name: "Buddy", breed: "Cocker Spaniel", animalType: "Dog", birth: new Date("2022-04-10") },
  { id: uuidv4(), name: "Lola", breed: "Bengal", animalType: "Cat", birth: new Date("2021-02-20") },
  { id: uuidv4(), name: "Thor", breed: "Akita", animalType: "Dog", birth: new Date("2017-11-11") },
  { id: uuidv4(), name: "Milo", breed: "Maine Coon", animalType: "Cat", birth: new Date("2020-03-14") },
  { id: uuidv4(), name: "Ziggy", breed: "Scottish Fold", animalType: "Cat", birth: new Date("2021-08-01") },
  { id: uuidv4(), name: "Coco", breed: "Chihuahua", animalType: "Dog", birth: new Date("2019-05-05") },
  { id: uuidv4(), name: "Whiskers", breed: "Abyssinian", animalType: "Cat", birth: new Date("2018-12-25") },
  { id: uuidv4(), name: "Rufus", breed: "Boxer", animalType: "Dog", birth: new Date("2016-09-30") }
];
