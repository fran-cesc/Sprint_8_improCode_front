import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Runner } from '../../interfaces/runners.interface.ts';
import { RaceService } from '../../services/race.service.js';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRunnerComponent } from '../../components/add-runner/add-runner.component.js';
import { EditRunnerComponent } from '../../components/edit-runner/edit-runner.component.js';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  public runners: Runner[] = [];
  public runner!: Runner;

  constructor(
    private raceService: RaceService,
    private router: Router,
    private modalService: NgbModal ) {}

  ngOnInit(): void {
    this.raceService.getRunners()
      .subscribe( runners => this.runners = runners)
  }

  delRunner(id: number): void{
    this.raceService.delRunner(id)
      .subscribe( resp => {
        alert(`Runner ${id} successfuly deleted`);
        window.location.reload();
      })
  };

  editRunner(runner: Runner){
    const modalRef = this.modalService.open(EditRunnerComponent);
    modalRef.componentInstance.runner = runner;
    // this.runner = runner;
    // console.log(this.runner);
  }

  addRunner(){
  const modalRef = this.modalService.open(AddRunnerComponent);
  }

}

// const modalref = this.modalService.open(AddReservationComponent);
//       modalref.componentInstance.hotels = this.hotels;
//       modalref.closed.subscribe((reservationCreated: Reservation) => {
//         console.log(reservationCreated);
//         this.reservations.push(reservationCreated);
//       });
