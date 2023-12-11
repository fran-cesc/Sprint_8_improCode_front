import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerModalComponent } from "../../shared/runnerModal/runnerModal.component";

@Component({
    selector: 'app-map',
    standalone: true,
    templateUrl: './map.component.html',
    styleUrl: './map.component.css',
    imports: [CommonModule, RunnerModalComponent]
})
export class MapComponent {

}
