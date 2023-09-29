// hotel.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private pisoLetras = [ 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  private habitacionesPorPiso = [ 4, 4, 6, 6, 6, 6, 6];
  private estadoHabitaciones: { [key: string]: 'disponible' | 'ocupada' | 'seleccionada' } = {};

  constructor() {
    this.inicializarHabitaciones();
  }

  inicializarHabitaciones() {
    for (let i = 0; i < this.pisoLetras.length; i++) {
      for (let j = 1; j <= this.habitacionesPorPiso[i]; j++) {
        const habitacion = `${this.pisoLetras[i]}${j < 10 ? '0' + j : j}`;
        this.estadoHabitaciones[habitacion] = 'disponible';
      }
    }
  }

  getHabitaciones() {
    return this.estadoHabitaciones;
  }

  seleccionarHabitacion(id: string) {
    if (this.estadoHabitaciones[id] === 'disponible') {
      this.estadoHabitaciones[id] = 'seleccionada';
    } else if (this.estadoHabitaciones[id] === 'seleccionada') {
      this.estadoHabitaciones[id] = 'disponible';
    }
  }

  ocuparHabitacion(id: string) {
    this.estadoHabitaciones[id] = 'ocupada';
  }
}
