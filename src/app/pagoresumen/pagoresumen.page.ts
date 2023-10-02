import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagoresumen',
  templateUrl: './pagoresumen.page.html',
  styleUrls: ['./pagoresumen.page.scss'],
})
export class PagoresumenPage implements OnInit {

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

  esPremium(habitacion: string): boolean {
    return ['F', 'G'].includes(habitacion.charAt(0));
  }

  calcularTotal() {
    this.total = this.habitacionesSeleccionadas.reduce((sum, habitacion) => {
      return sum + (this.esPremium(habitacion) ? this.PRECIO_PREMIUM : this.PRECIO_TURISTA);
    }, 0);
  }


}
