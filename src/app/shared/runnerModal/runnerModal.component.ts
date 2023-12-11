import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RaceService } from '../../services/race.service';
import { Runner } from '../../interfaces/runners.interface.ts';

@Component({
  selector: 'app-runner-modal',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  templateUrl: './runnerModal.component.html',
  styleUrl: './runnerModal.component.css',
})
export class RunnerModalComponent {

  public runnerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    race_time: new FormControl('', Validators.required),
    best_time: new FormControl('', Validators.required)
  })

  @Input()
  public runner!: Runner;

  @Output()
  public onCloseModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private raceService: RaceService){}

  addRunner(): void{
    // TODO validate form
    // if (!this.runnerForm.valid){
    //   return;
    // }
    this.raceService.addRunner(this.runnerForm.value).subscribe();
    alert(`Runner ${this.runnerForm.value.first_name} ${this.runnerForm.value.last_name} added successfuly`);
    this.runnerForm.reset();
    this.onCloseModal.emit(true);
  }

}
