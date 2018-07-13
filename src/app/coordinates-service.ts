import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Coordinate } from './coordinate';
import { COORDINATES } from './mock-coordinates';

 
@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {

 
  getCoordinates(): Observable<Coordinate[]> {
 
    return of(COORDINATES);
  }
}