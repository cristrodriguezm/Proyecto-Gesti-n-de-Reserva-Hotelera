import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})

export class HabitacionPage implements OnInit {

  habitn: string = '';
  habitPiso: string = '';
  habitNumero: string = '';

  jsonHabitacionFicha: any = [];
  jsonHabitacionPiso: any = [];

  constructor( private location: Location, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.habitn = JSON.parse(params['habit']); });
    this.habitacionesLlamado().subscribe(res=>{ this.jsonHabitacionFicha = res; });
    [this.habitPiso,this.habitNumero] = this.habitn.split('');
  }

  myBackButton(){
    this.location.back();
  }

  habitacionesLlamado(){
    return this.http
    .get("assets/json/habitaciones.json")
    .pipe(map((res:any) => {return res.pisos;}))
  }

  removeLeadingZeros(input: string): string {
    const result = input.replace(/^0+/, '');
    return result;
  }
  
}
