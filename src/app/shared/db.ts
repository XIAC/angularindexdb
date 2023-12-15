import Dexie, { Table } from "dexie";
import { Mascota } from "./mascotas.model";

export class AppDB extends Dexie {
  mascotas!: Table<Mascota, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      mascotas: 'id, nombre, raza'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

    await db.mascotas.bulkAdd([
      {
        id: 1,
        nombre: 'Sven',
        raza: 'Coocker'
      },
      {
        id: 2,
        nombre: 'Sazy',
        raza: 'Bulldog'
      },
      {
        id: 3,
        nombre: 'Salchis',
        raza: 'Perro salchicha'
      },
    ]);
  }
}

export const db = new AppDB();
