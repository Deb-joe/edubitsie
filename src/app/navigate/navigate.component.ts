import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  activetab = 'home';
  activetab = 'about';
  activetab = 'portfolio';

  constructor() { }

  ngOnInit(): void {
  }

getActiveTab(tabname: string){
	this.activetab = tabname;
}
}
