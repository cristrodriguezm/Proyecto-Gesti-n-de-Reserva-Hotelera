import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-reservalogin',
  templateUrl: './reservalogin.page.html',
  styleUrls: ['./reservalogin.page.scss'],
})
export class ReservaloginPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }
}
