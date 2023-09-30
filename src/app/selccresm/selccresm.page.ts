import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-selccresm',
  templateUrl: './selccresm.page.html',
  styleUrls: ['./selccresm.page.scss'],
})
export class SelccresmPage implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }
}
