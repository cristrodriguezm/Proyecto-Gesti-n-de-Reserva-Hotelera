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
  pisoLetras: string[] = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

isString(value: any): value is string {
  return typeof value === 'string';
}

  constructor(private hotelService: HotelService, private location: Location) {}

  ngOnInit() {
    this.habitaciones = this.hotelService.getHabitaciones();
  }

  seleccionarHabitacion(id: string) {
    this.hotelService.seleccionarHabitacion(id);
  }

  esTurista(piso: string): boolean {
    return ['A', 'B', 'C', 'D', 'E'].includes(piso);
  }
  myBackButton(){
    this.location.back();
  }
}

