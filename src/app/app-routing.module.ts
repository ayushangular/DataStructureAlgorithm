import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { ArrayOperationComponent } from './array-operation/array-operation.component';
import { JsComponent } from './js/js.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path:'sort', 
    component: SortComponent
  },

  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path: 'array', 
    component:ArrayOperationComponent
  },
  {
    path: 'js',
    component:JsComponent
  }
];                         

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
