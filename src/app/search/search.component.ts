import { Component, OnInit } from '@angular/core';
import { Search }    from './search';
import {FormService} from '../form-service';
import  { ElementRef, NgModule, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {} from '@types/googlemaps';  



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public srclatitude: number;
  public srclongitude: number;
  public destlatitude: number;
  public destlongitude: number;
  public searchControl: FormControl;
  public search_destination: FormControl;


  @ViewChild("search")
  public searchElementRef: ElementRef;

   @ViewChild("search_dest")
  public searchElementRef_2: ElementRef;


  constructor(  public formService:FormService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  ngOnInit() {

    // this.latitude = 39.8282;
    // this.longitude = -98.5795;
      //create search FormControl
    this.searchControl = new FormControl();
    this.search_destination = new FormControl();
    
    //set current position
    // this.setCurrentPosition();
        //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place1: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place1.geometry === undefined || place1.geometry === null) {
            return;
          }

      
          this.searchControl.setValue(place1.formatted_address);

          // set latitude, longitude and zoom
          this.srclatitude= place1.geometry.location.lat();
          this.srclongitude = place1.geometry.location.lng();
          console.log("src lat "+ this.srclatitude+"src long "+this.srclongitude);
        //  this.zoom = 12;
        });
      });
    });


     this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef_2.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
           this.search_destination.setValue(place.formatted_address);
          //set latitude, longitude and zoom
          this.destlatitude = place.geometry.location.lat();
          this.destlongitude = place.geometry.location.lng();
              console.log("dest lat "+ this.destlatitude+"dest long "+this.destlongitude);
        //  this.zoom = 12;
        });
      });
    });
    
  }



  //   private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       // this.zoom = 12;
  //     });
  //   }
  // }

   selectedItems: Search; 

    onSubmit() { 

       this.selectedItems=new Search(this.srclatitude, this.srclongitude, this.destlatitude, this.destlongitude, 12);
       // console.log("src value "+this.searchControl.value + " dest value "+this.search_destination.value );
         this.formService.onFormSubmitted.emit(this.selectedItems);
     }

}
