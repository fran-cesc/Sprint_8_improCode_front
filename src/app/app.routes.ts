import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { GraphComponent } from './pages/graph/graph.component';
import { AddRunnerComponent } from './components/add-runner/add-runner.component';

export const routes: Routes = [
  {
    path: 'runners',
    title: 'runners',
    component: HomeComponent,
  },
  {
    path: 'runners',
    children: [
      {
        path: 'new',
        title: 'Add new runner',
        component: AddRunnerComponent
      },
      {
        path: 'edit/:id',
        component: AddRunnerComponent
      },
      {
        path: ':id',
        component: AddRunnerComponent
      }
    ],
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
