import { Component,ChangeDetectorRef } from '@angular/core';
import { GeocodeService } from './geocode.service';
import {FormService} from './form-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(
        private geocodeService: GeocodeService,
        private ref: ChangeDetectorRef,
        public formService:FormService
  ) {}



loading: boolean;
lat:any;
lng:any;
public origin: {  }
public destination: { }



ngOnInit() {
   
       this.formService.onFormSubmitted.subscribe( (formData : any ) => {
            console.log(formData.src +"Form Data from the Main Component")
            // this.addressToCoordinates(formData.src);
           this.addressToCoordinatesSource(formData.src);
           console.log(this.origin);
            // this.addressToCoordinates(formData.dest);
           this.addressToCoordinatesDestination(formData.dest);
             console.log(this.destination)
        })


       this.getDirection();
       this.getCurrentLocation();




  }


   // Current location       
  getCurrentLocation() {
    if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    // this.geolocationPosition = position,
                 
                        this.lat= position.coords.latitude;
                        this.lng=position.coords.longitude; 
                },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
            );
        };

  }

  getDirection() {
    this.origin = { lat: 36.8507689, lng: -76.2858726 }
    this.destination = { lat:  37.5407246, lng: -77.4360481 }
  }


   addressToCoordinatesSource(arg) {
    this.loading = true;
    this.geocodeService.geocodeAddress(arg)
    .subscribe(
      location => {
        this.origin = location;
        this.loading = false;
        this.ref.detectChanges();    
      }     
    );     
  }

   addressToCoordinatesDestination(arg) {
    this.loading = true;
    this.geocodeService.geocodeAddress(arg)
    .subscribe(
      location => {
        this.destination = location;
        this.loading = false;
        this.ref.detectChanges();    
      }     
    );     
  }
  
  


// // for the marker
//   markers: marker[] = [
//     {
//       lat: 51.673858,
//       lng: 7.815982,
//       label: 'A',
//       draggable: true
//     },
//     {
//       lat: 51.373858,
//       lng: 7.215982,
//       label: 'B',
//       draggable: false
//     },
//     {
//       lat: 51.723858,
//       lng: 7.895982,
//       label: 'C',
//       draggable: true
//     }
//   ]



}




// // just an interface for type safety.
// interface marker {
//   lat: number;
//   lng: number;
//   label?: string;
//   draggable: boolean;
// }
