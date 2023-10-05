import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-habitsreserva',
  templateUrl: './habitsreserva.page.html',
  styleUrls: ['./habitsreserva.page.scss'],
})
export class HabitsreservaPage implements OnInit {

  habitaciones: any = {};
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;

  jsonHabitacionFicha: any = [];
  habitacionesSeleccionLista: string[] = [];
  habitacionesSeleccionIdentificadorLista: string[] = [];

  constructor( private route: ActivatedRoute, private location: Location, private router: Router, private http: HttpClient) {}

  ngOnInit() {

    this.habitacionesLlamado().subscribe(res=>{ this.jsonHabitacionFicha = res; });

    this.route.queryParams.subscribe(params => {
      if(params['fechaInicio'] && params['fechaFin']) {
          this.fechaInicio = new Date(JSON.parse(params['fechaInicio']));
          this.fechaFin = new Date(JSON.parse(params['fechaFin']));
      }
    });
  }

  habitacionesLlamado(){
    return this.http
    .get("assets/json/habitaciones.json")
    .pipe(map((res:any) => {return res.pisos;}))
  }

  habitacionesSeleccion(habtnumero: string, identificador: string) {
    const element = document.getElementById(identificador);
    if ( element && element.getAttribute("class") !== "room habitacion-box ocupada" && element.getAttribute("class") === "room habitacion-box disponible" ) {
      element.setAttribute("class", "room habitacion-box seleccionada");
      this.habitacionesSeleccionLista.push(habtnumero);
      this.habitacionesSeleccionIdentificadorLista.push(identificador); }
    else if ( element && element.getAttribute("class") !== "room habitacion-box ocupada" && element.getAttribute("class") === "room habitacion-box seleccionada") {
      element.setAttribute("class", "room habitacion-box disponible");
      this.habitacionesSeleccionLista.splice(this.habitacionesSeleccionLista.indexOf(habtnumero), 1);
      this.habitacionesSeleccionIdentificadorLista.splice(this.habitacionesSeleccionLista.indexOf(identificador), 1); }
  }

  myBackButton(){
    this.location.back();
  }

  navegarAResumen() {
    this.router.navigate(['/selccresm'], { queryParams: { habitaciones: JSON.stringify(this.habitacionesSeleccionLista), fechaInicio: JSON.stringify(this.fechaInicio), fechaFin: JSON.stringify(this.fechaFin) } });
  }
}

