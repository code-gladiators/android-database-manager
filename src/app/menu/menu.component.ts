import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	databases=[	"Bike.db-journal",
		"Contact.db-journal",
		"ExtTest.db",
		"Person.db",
		"Contact.db",
		]
	
	
  constructor() { }
  ngOnInit() {
  }

}
