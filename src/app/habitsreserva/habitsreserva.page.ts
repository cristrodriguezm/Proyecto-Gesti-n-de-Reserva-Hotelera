import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-habitsreserva',
  templateUrl: './habitsreserva.page.html',
  styleUrls: ['./habitsreserva.page.scss'],
})
export class HabitsreservaPage implements OnInit {

  habitaciones: any = {};

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.habitaciones = this.hotelService.getHabitaciones();
  }

  seleccionarHabitacion(id: string) {
    this.hotelService.seleccionarHabitacion(id);
  }

  getKeyAsString(key: any): string {
    return key as string;
  }

}
