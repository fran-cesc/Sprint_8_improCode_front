import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RaceService } from '../../services/race.service';
import { Runner } from '../../interfaces/runners.interface.ts';

@Component({
  selector: 'app-editRunner-modal',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  templateUrl: './editRunnerModal.component.html',
  styleUrl: './editRunnerModal.component.css',
})
export class editRunnerModalComponent implements OnInit{

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

  constructor(private router: Router, private raceService: RaceService){

  }
  ngOnInit(): void {
    this.runnerForm.reset(this.runnerForm);
    return;
  }


  updateRunner(){
        // TODO validate form
    // if (!this.runnerForm.valid){
    //   return;
    // }
    this.raceService.updateRunner(this.runnerForm.value).subscribe();
    this.onCloseModal.emit(true);
  }

}
