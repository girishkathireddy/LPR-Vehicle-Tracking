import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  public coordinates:marker[]= [
 {
  lat: 36.8507689,
  lng:-76.2858726
 },{
  lat: 37.5407246,
  lng: -77.4360481
 }
];


}

interface marker {
	lat: number;
	lng: number;
}
