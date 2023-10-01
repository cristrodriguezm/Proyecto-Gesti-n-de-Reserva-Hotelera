import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


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

  constructor( private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.habitacionesSeleccionadas = JSON.parse(params['habitaciones']);
      this.calcularTotal();
    });
  }

  esPremium(habitacion: string): boolean {
    return ['F', 'G'].includes(habitacion.charAt(0));
  }

  calcularTotal() {
    this.total = this.habitacionesSeleccionadas.reduce((sum, habitacion) => {
      return sum + (this.esPremium(habitacion) ? this.PRECIO_PREMIUM : this.PRECIO_TURISTA);
    }, 0);
  }
  myBackButton(){
    this.location.back();
  }

  navegarAPagoMedios() {
    this.router.navigate(['/pagomedioselcc'], { queryParams: { habitaciones: JSON.stringify(this.habitacionesSeleccionadas) } });
  }

}
