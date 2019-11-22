import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  showFiller: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
