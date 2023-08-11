import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { ArrayOperationComponent } from './array-operation/array-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MapComponent,
    SortComponent,
    ArrayOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
