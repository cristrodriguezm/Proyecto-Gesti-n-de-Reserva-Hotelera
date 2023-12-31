import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reservalogin',
  templateUrl: './reservalogin.page.html',
  styleUrls: ['./reservalogin.page.scss'],
})
export class ReservaloginPage implements OnInit {

  habitacionesSeleccionadas: string[] = [];
  PRECIO_TURISTA: number = 30000;
  PRECIO_PREMIUM: number = 45000;
  total: number = 0;

  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;

  constructor( private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.habitacionesSeleccionadas = JSON.parse(params['habitaciones']);
      this.calcularTotal();
      if(params['fechaInicio'] && params['fechaFin']) {
          this.fechaInicio = new Date(JSON.parse(params['fechaInicio']));
          this.fechaFin = new Date(JSON.parse(params['fechaFin']));
      }
    });
  }

  myBackButton(){
    this.location.back();
  }

  esPremium(habitacion: string): boolean {
    return ['F', 'G'].includes(habitacion.charAt(0));
  }

  calcularTotal() {
    this.total = this.habitacionesSeleccionadas.reduce((sum, habitacion) => {
      return sum + (this.esPremium(habitacion) ? this.PRECIO_PREMIUM : this.PRECIO_TURISTA);
    }, 0);
  }


  navegarAPagoMedios() {
    this.router.navigate(['/pagomedios'], { queryParams: { habitaciones: JSON.stringify(this.habitacionesSeleccionadas), fechaInicio: JSON.stringify(this.fechaInicio), fechaFin: JSON.stringify(this.fechaFin) } });
  }

}
