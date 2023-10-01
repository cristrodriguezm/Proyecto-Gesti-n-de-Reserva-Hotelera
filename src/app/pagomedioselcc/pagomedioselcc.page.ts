import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagomedioselcc',
  templateUrl: './pagomedioselcc.page.html',
  styleUrls: ['./pagomedioselcc.page.scss'],
})
export class PagomedioselccPage implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  habitacionesSeleccionadas: string[] = [];
  PRECIO_TURISTA: number = 30000;
  PRECIO_PREMIUM: number = 45000;
  total: number = 0;

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

  navegarAPagoResumen() {
    this.router.navigate(['/pagoresumen'], { queryParams: { habitaciones: JSON.stringify(this.habitacionesSeleccionadas) } });
  }

}
