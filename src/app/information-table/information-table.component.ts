import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { CoordinatesService } from '../coordinates-service';
import { Search }    from '../search/search';
import {FormService} from '../form-service';


@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {

  public srclatitude: number;
  public srclongitude: number;
  public destlatitude: number;
  public destlongitude: number;
   selectedItems: Search; 

  dataSource: Coordinate[];
 
  constructor(private coordinatesService: CoordinatesService,
    public formService:FormService) { }
 
  ngOnInit() {
    this.getCoordinates();
  }
 

 
  getCoordinates(): void {
    this.coordinatesService.getCoordinates()
        .subscribe(coordinates => this.dataSource = coordinates);
  }


   displayedColumns: string[] = ['position', 'name', 'origin', 'destination'];


  onRowClicked(row) {
    console.log('Row clicked: ', row);
     this.selectedItems=new Search(row.srclatitude, row.srclongitude, row.destlatitude, row.destlongitude, 12);
     this.formService.onFormSubmitted.emit(this.selectedItems);
  }

}
