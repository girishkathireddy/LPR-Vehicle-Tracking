import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InformationTableComponent,

  ],
  imports: [
    BrowserModule,

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
      apiKey: 'AIzaSyDVUkaslouCX4g55Q0thcJvPgwje8-nAXw'
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
