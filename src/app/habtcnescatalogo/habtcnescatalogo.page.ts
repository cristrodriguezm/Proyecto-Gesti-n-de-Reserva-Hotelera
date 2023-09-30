import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Location } from "@angular/common";
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-habtcnescatalogo',
  templateUrl: './habtcnescatalogo.page.html',
  styleUrls: ['./habtcnescatalogo.page.scss'],
})
export class HabtcnescatalogoPage implements OnInit {
  habitaciones: any = {};
  pisoLetras: string[] = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

  nombre: string = "";

  isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  constructor(private hotelService: HotelService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.habitaciones = this.hotelService.getHabitaciones();
  }

  ingresar() {
    let navigationExtras: NavigationExtras = { state: { user: this.nombre } };
    this.router.navigate(['./habitacion'], navigationExtras); }
  
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
