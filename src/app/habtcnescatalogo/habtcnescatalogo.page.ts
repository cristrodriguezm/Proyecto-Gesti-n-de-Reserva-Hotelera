import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-habtcnescatalogo',
  templateUrl: './habtcnescatalogo.page.html',
  styleUrls: ['./habtcnescatalogo.page.scss'],
})
export class HabtcnescatalogoPage implements OnInit {
  habitaciones: any = {};
  pisoLetras: string[] = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

  isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  constructor(private hotelService: HotelService) { }

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
