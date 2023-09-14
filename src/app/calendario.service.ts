import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private fechaInicioRangoSubject = new BehaviorSubject<Date | null>(null);
  private fechaFinRangoSubject = new BehaviorSubject<Date | null>(null);

  public fechaInicioRango$ = this.fechaInicioRangoSubject.asObservable();
  public fechaFinRango$ = this.fechaFinRangoSubject.asObservable();

  constructor() {}

  seleccionarRango(fecha: Date): void {
    if (!this.fechaInicioRangoSubject.value || (this.fechaInicioRangoSubject.value && this.fechaFinRangoSubject.value)) {
      this.fechaInicioRangoSubject.next(fecha);
      this.fechaFinRangoSubject.next(null);
    } else {
      if (fecha > this.fechaInicioRangoSubject.value) {
        this.fechaFinRangoSubject.next(fecha);
      } else {
        this.fechaFinRangoSubject.next(this.fechaInicioRangoSubject.value);
        this.fechaInicioRangoSubject.next(fecha);
      }
    }
  }

  deseleccionarRango(): void {
    this.fechaInicioRangoSubject.next(null);
    this.fechaFinRangoSubject.next(null);
  }

  cambiarMes(incremento: number): void {
    if(this.fechaInicioRangoSubject.value) {
      const fechaActual = this.fechaInicioRangoSubject.value;
      const nuevaFecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + incremento, fechaActual.getDate());
      this.fechaInicioRangoSubject.next(nuevaFecha);
    }
    if(this.fechaFinRangoSubject.value) {
      const fechaActual = this.fechaFinRangoSubject.value;
      const nuevaFecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + incremento, fechaActual.getDate());
      this.fechaFinRangoSubject.next(nuevaFecha);
    }
  }
}

