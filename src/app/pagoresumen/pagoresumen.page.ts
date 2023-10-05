import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagoresumen',
  templateUrl: './pagoresumen.page.html',
  styleUrls: ['./pagoresumen.page.scss'],
})
export class PagoresumenPage implements OnInit {

  habitacionesSeleccionadas: string[] = [];
  totalSum: number = 0;

  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;

  diferenciaEnMilisegundos: number = 0;
  diferenciaEnDias: number = 0;

  jsonHabitacionFicha: any = [];

  constructor( private route: ActivatedRoute, private location: Location, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.habitacionesSeleccionadas = JSON.parse(params['habitaciones']);
      if(params['fechaInicio'] && params['fechaFin']) {
          this.fechaInicio = new Date(JSON.parse(params['fechaInicio']));
          this.fechaFin = new Date(JSON.parse(params['fechaFin']));
          this.diferenciaEnMilisegundos = this.fechaFin.getTime() - this.fechaInicio.getTime();
          this.diferenciaEnDias = Math.floor(this.diferenciaEnMilisegundos / (1000 * 3600 * 24));
      }
    });

    this.habitacionesLlamado().subscribe(res=>{ this.jsonHabitacionFicha = res; });

  }

  ngAfterContentChecked() {
    this.totalSumCalc();
  }

  habitacionesLlamado(){
    return this.http
    .get("assets/json/habitaciones.json")
    .pipe(map((res:any) => {return res.pisos;}))
  }

  pisoNumeroSeparador(habtcn: string): { piso: string, numero: string } {
    const piso = habtcn.charAt(0);
    const numero = habtcn.substring(1);
    return { piso, numero };
  }

  totalSumCalc() {
    this.totalSum = 0;
    for (let habit of this.habitacionesSeleccionadas) for (let a of this.jsonHabitacionFicha) if ( a.piso === this.pisoNumeroSeparador(habit).piso) for (let b of a.rooms) if (b.numero === this.pisoNumeroSeparador(habit).numero) this.totalSum = this.totalSum+ (this.diferenciaEnDias * b.precio);
  }


}
