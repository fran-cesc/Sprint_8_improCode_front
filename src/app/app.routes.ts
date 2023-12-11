import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { GraphComponent } from './pages/graph/graph.component';
import { AddRunerComponent } from './pages/add-runer/add-runer.component';

export const routes: Routes = [
  {
    path: 'runners',
    component: HomeComponent,
    children: [
      {
        path: 'new',
        component: AddRunerComponent
      },
      {
        path: 'edit',
        component: AddRunerComponent
      },
      {
        path: 'runners/id',
        component: AddRunerComponent
      }
    ]
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: '',
    redirectTo: '/runners',
    pathMatch: 'full'
  }
];
