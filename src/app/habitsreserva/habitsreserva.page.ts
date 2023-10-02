import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';


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
  habitacionesSeleccionadas: string[] = [];

  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;

  constructor( private route: ActivatedRoute, private location: Location, private router: Router) {}

  ngOnInit() {
    this.inicializarHabitaciones();
    this.habitaciones = this.estadoHabitaciones;

    this.route.queryParams.subscribe(params => {
//      console.log('Recibiendo fechas:', this.fechaInicio, this.fechaFin);
      if(params['fechaInicio'] && params['fechaFin']) {
          this.fechaInicio = new Date(JSON.parse(params['fechaInicio']));
          this.fechaFin = new Date(JSON.parse(params['fechaFin']));
      }
  });

  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  seleccionarHabitacion(id: string) {
    if (this.estadoHabitaciones[id] === 'disponible') {
        this.estadoHabitaciones[id] = 'seleccionada';
        this.habitacionesSeleccionadas.push(id);
    } else if (this.estadoHabitaciones[id] === 'seleccionada') {
        this.estadoHabitaciones[id] = 'disponible';
        const index = this.habitacionesSeleccionadas.indexOf(id);
        if (index > -1) {
            this.habitacionesSeleccionadas.splice(index, 1);
        }
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

  navegarAResumen() {
    this.router.navigate(['/selccresm'], { queryParams: { habitaciones: JSON.stringify(this.habitacionesSeleccionadas), fechaInicio: JSON.stringify(this.fechaInicio), fechaFin: JSON.stringify(this.fechaFin) } });
  }
}

