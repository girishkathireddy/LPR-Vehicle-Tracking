import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { CoordinatesService } from '../coordinates-service';


@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {


  dataSource: Coordinate[];
 
  constructor(private coordinatesService: CoordinatesService) { }
 
  ngOnInit() {
    this.getCoordinates();
  }
 

 
  getCoordinates(): void {
    this.coordinatesService.getCoordinates()
        .subscribe(coordinates => this.dataSource = coordinates);
  }


   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


}
