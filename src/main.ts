/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZnJhbi1jZXNjIiwiYSI6ImNscWFuOXFhNTIwbWoydnBzM3p6eDIxc2QifQ.dmogxgq7iaUq9m-I-v-Pzg';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
