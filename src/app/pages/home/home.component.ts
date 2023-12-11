import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Runner } from '../../interfaces/runners.interface.ts';
import { RaceService } from '../../services/race.service.js';
import { Router, RouterModule } from '@angular/router';
import { RunnerModalComponent } from '../../shared/runnerModal/runnerModal.component.js';
import { editRunnerModalComponent } from '../../shared/editRunnerModal/editRunnerModal.component.js';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RouterModule, RunnerModalComponent, editRunnerModalComponent]
})
export class HomeComponent {
  public runners: Runner[] = [];
  public runner!: Runner;

  constructor( private raceService: RaceService, private router: Router ) {}

  ngOnInit(): void {
    this.raceService.getRunners()
      .subscribe( runners => this.runners = runners)
  }

  delRunner(id: number): void{
    this.raceService.delRunner(id)
      .subscribe( runner => {
        alert(`Runner ${id} deleted`);
        window.location.reload();
      })
  };


  editRunner(runner: Runner){
    this.runner = runner;
    console.log(this.runner);
  }

  onCloseModal(param: boolean){
    if (param === true) {
      window.location.reload();
    }

  }
}

