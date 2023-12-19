import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-map',
    standalone: true,
    templateUrl: './map.component.html',
    styleUrl: './map.component.css',
    imports: [CommonModule]
})
export class MapComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });  }
}
