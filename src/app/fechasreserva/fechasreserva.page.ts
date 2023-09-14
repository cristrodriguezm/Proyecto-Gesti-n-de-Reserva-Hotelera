import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario.service';

@Component({
  selector: 'app-fechasreserva',
  templateUrl: './fechasreserva.page.html',
  styleUrls: ['./fechasreserva.page.scss'],
})
export class FechasreservaPage implements OnInit {
  fechaInicioRango: Date | null = null;
  fechaFinRango: Date | null = null;
  fechaSeleccionada!: string;


  constructor(private calendarioService: CalendarioService) { }

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
}
