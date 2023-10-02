import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fechasreserva',
  templateUrl: './fechasreserva.page.html',
  styleUrls: ['./fechasreserva.page.scss'],
})
export class FechasreservaPage implements OnInit {
  fechaInicioRango: Date | null = null;
  fechaFinRango: Date | null = null;
  fechaSeleccionada!: string;
  habitacionesSeleccionadas: string[] = [];

  constructor(private calendarioService: CalendarioService, private router: Router) { }

  ngOnInit() {
    this.calendarioService.fechaInicioRango$.subscribe(fecha => {
      this.fechaInicioRango = fecha;
    });

    this.calendarioService.fechaFinRango$.subscribe(fecha => {
      this.fechaFinRango = fecha;
    });
  }

  seleccionarFechaRango(fecha: string) {
    this.calendarioService.seleccionarRango(new Date(fecha));
  }

  deseleccionar() {
    this.calendarioService.deseleccionarRango();
  }
  
  navegarAHabitacionesSeleccion() {
    this.router.navigate(['/habitsreserva'], { queryParams: { fechaInicio: JSON.stringify(this.fechaInicioRango), fechaFin: JSON.stringify(this.fechaFinRango) } });
//    console.log('Enviando fechas:', this.fechaInicioRango, this.fechaFinRango);
  }
}