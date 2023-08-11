import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { SortComponent } from './sort/sort.component';
import { ArrayOperationComponent } from './array-operation/array-operation.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'sort', component: SortComponent},
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
