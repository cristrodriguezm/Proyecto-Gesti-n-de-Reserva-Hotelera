import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-habitsreserva',
  templateUrl: './habitsreserva.page.html',
  styleUrls: ['./habitsreserva.page.scss'],
})
export class HabitsreservaPage implements OnInit {
  habitaciones: any = {};
  pisoLetras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


isString(value: any): value is string {
  return typeof value === 'string';
}


  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.habitaciones = this.hotelService.getHabitaciones();
  }

  seleccionarHabitacion(id: string) {
    this.hotelService.seleccionarHabitacion(id);
  }

  esTurista(piso: string): boolean {
    return ['A', 'B', 'C', 'D', 'E'].includes(piso);
  }
}

