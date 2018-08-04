import { BrowserModule } from '@angular/platform-browser';
import { ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

// bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';

// table
import { InformationTableComponent } from './information-table/information-table.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

//Maps
import { CommonModule } from '@angular/common';
import { AgmCoreModule,MapsAPILoader } from '@agm/core';

import { AgmDirectionModule } from 'agm-direction'   // agm-direction

import { GeocodeService } from './geocode.service';
import { SearchComponent } from './search/search.component';   //Geolocation

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';  // <-- #1 import module

import {FormService} from './form-service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InformationTableComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    // Navigation
    CollapseModule.forRoot(),

    // for table
    // FormsModule,
    // HttpModule,
    BrowserAnimationsModule,
    // MatInputModule, 
    // MatButtonModule,
    // MatSelectModule,
    // MatIconModule,
    MatTableModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your API Key',
      libraries: ["places"]
    }),
    AgmDirectionModule,
    AppRoutingModule   


  ],
  providers: [GeocodeService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
