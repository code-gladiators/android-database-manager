import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {
	db=[
	{
        "dataType": "integer",
        "value": 1
      },
      {
        "dataType": "text",
        "value": "bike_name0"
      },
      {
        "dataType": "text",
        "value": "BLACK"
      },
      {
        "dataType": "real",
        "value": 10.449999809265137
      },
      {
        "dataType": "integer",
        "value": 2
      },
      {
        "dataType": "text",
        "value": "bike_name1"
      },
      {
        "dataType": "text",
        "value": "BLACK"
      },
      {
        "dataType": "real",
        "value": 11.449999809265137
      },
    
      {
        "dataType": "integer",
        "value": 3
      },
      {
        "dataType": "text",
        "value": "bike_name2"
      },
      {
        "dataType": "text",
        "value": "BLACK"
      },
      {
        "dataType": "real",
        "value": 12.449999809265137
      }
		]
  constructor() { }

  ngOnInit() {
  }

}
