import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-habitsreserva',
  templateUrl: './habitsreserva.page.html',
  styleUrls: ['./habitsreserva.page.scss'],
})
export class HabitsreservaPage implements OnInit {
  habitaciones: any = {};
  pisoLetras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  habitacionesPorPiso: number[] = [6, 6, 6, 6, 6, 4, 4];
  estadoHabitaciones: { [key: string]: 'disponible' | 'ocupada' | 'seleccionada' } = {};
  NUM_HABITACIONES_OCUPADAS = 8;  // numero de habitaciones ocupadas

  constructor(private hotelService: HotelService, private location: Location) {}

  ngOnInit() {
    this.inicializarHabitaciones();
    this.habitaciones = this.estadoHabitaciones;
  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  seleccionarHabitacion(id: string) {
    if (this.estadoHabitaciones[id] === 'disponible') {
        this.estadoHabitaciones[id] = 'seleccionada';
    } else if (this.estadoHabitaciones[id] === 'seleccionada') {
        this.estadoHabitaciones[id] = 'disponible';
    }
  }

  esTurista(piso: string): boolean {
    return ['A', 'B', 'C', 'D', 'E'].includes(piso);
  }

  private inicializarHabitaciones() {
    const habitacionesAleatorias: string[] = [];

    while (habitacionesAleatorias.length < this.NUM_HABITACIONES_OCUPADAS) {
        const pisoAleatorio = this.pisoLetras[Math.floor(Math.random() * this.pisoLetras.length)];
        const numMaxHabitaciones = this.habitacionesPorPiso[this.pisoLetras.indexOf(pisoAleatorio)];
        const numeroHabitacion = Math.floor(Math.random() * numMaxHabitaciones) + 1;
        const idHabitacionAleatoria = `${pisoAleatorio}${numeroHabitacion < 10 ? '0' + numeroHabitacion : numeroHabitacion}`;

        if (!habitacionesAleatorias.includes(idHabitacionAleatoria)) {
            habitacionesAleatorias.push(idHabitacionAleatoria);
        }
    }

    for (let piso of this.pisoLetras) {
        for (let i = 1; i <= this.habitacionesPorPiso[this.pisoLetras.indexOf(piso)]; i++) {
            const habitacionId = `${piso}${i < 10 ? '0' + i : i}`;
            this.estadoHabitaciones[habitacionId] = habitacionesAleatorias.includes(habitacionId) ? 'ocupada' : 'disponible';
        }
    }
  }
  myBackButton(){
    this.location.back();
  }
}