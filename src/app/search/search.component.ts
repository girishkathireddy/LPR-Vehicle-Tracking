import { Component, OnInit } from '@angular/core';
import { Search }    from './search';
import {FormService} from '../form-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(  public formService:FormService) { }

  ngOnInit() {
  }

   selectedItems: Search; 

   model = new Search('Norfolk', 'Virginia Beach');

    onSubmit() { 
       this.selectedItems=this.model;
         this.formService.onFormSubmitted.emit(this.selectedItems);
     }

}
