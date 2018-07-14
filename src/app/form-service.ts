import { Injectable, EventEmitter } from '@angular/core';


@Injectable() 
export class FormService {
     onFormSubmitted = new EventEmitter<any>();
}