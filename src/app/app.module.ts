import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { ArrayOperationComponent } from './array-operation/array-operation.component';
import { FormsModule } from '@angular/forms';
import { JsComponent } from './js/js.component';
import { HomeComponent } from './home/home.component';


@NgModule({

  declarations: [
    AppComponent,
    FilterComponent,
    MapComponent,
    SortComponent,
    ArrayOperationComponent,
    JsComponent,
    HomeComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
