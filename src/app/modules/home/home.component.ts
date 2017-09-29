import { Component, OnInit } from '@angular/core';
import {HomeService} from "./services/home.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeService:HomeService) {}
  public data;
  ngOnInit() {
    this.makeApiCall();
  }
  makeApiCall() {
    this.homeService.getThings().subscribe(data => {
      console.log('[Home Component] received data from api: ', data);
      this.data = data
    });
  }

}
