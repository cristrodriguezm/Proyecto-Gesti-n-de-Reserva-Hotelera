import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nuevoclientecuenta',
  templateUrl: './nuevoclientecuenta.page.html',
  styleUrls: ['./nuevoclientecuenta.page.scss'],
})
export class NuevoclientecuentaPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
