import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {

  data: string = "";

  constructor( private location: Location, private activateroute: ActivatedRoute, private router: Router) {
    this.activateroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state) this.data = this.router.getCurrentNavigation()?.extras?.state?.['user']; }); }

  ngOnInit() {
  }
  myBackButton(){
    this.location.back();
  }

}
