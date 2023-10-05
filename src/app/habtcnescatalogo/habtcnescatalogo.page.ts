import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-habtcnescatalogo',
  templateUrl: './habtcnescatalogo.page.html',
  styleUrls: ['./habtcnescatalogo.page.scss'],
})
export class HabtcnescatalogoPage implements OnInit {

  jsonHabitacionFicha: any = [];

  constructor( private location: Location, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.habitacionesLlamado().subscribe(res=>{ this.jsonHabitacionFicha = res; });
  }

  habitacionesLlamado(){
    return this.http
    .get("assets/json/habitaciones.json")
    .pipe(map((res:any) => {return res.pisos;}))
  }

  myBackButton(){
    this.location.back();
  }
  
  navegarAHabitacion(habit: string) {
    this.router.navigate(['/habitacion'], { queryParams: { habit: JSON.stringify(habit) } });
  }

}
