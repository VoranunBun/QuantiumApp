import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  burgerMenuClick() {
    $("body").toggleClass("enlarge-menu");
  }

  
}
