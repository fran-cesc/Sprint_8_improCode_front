import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RaceService } from '../../services/race.service.js';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorsService } from '../../services/validators.service.js';

@Component({
  selector: 'app-add-runer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-runner.component.html',
  styleUrl: './add-runner.component.css',
})
export class AddRunnerComponent {
  public runnerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    race_time: new FormControl('', [
      Validators.required,
      Validators.pattern(this.validatorsService.raceTimePattern),
    ]),
    best_time: new FormControl('', [
      Validators.required,
      Validators.pattern(this.validatorsService.raceTimePattern),
    ]),
  });

  constructor(
    private router: Router,
    private raceService: RaceService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private validatorsService: ValidatorsService
  ) {}

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.runnerForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.runnerForm.controls[field]) return null;
    const errors = this.runnerForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      if (key === 'required') {
        return 'This field is required';
      } else if (key === 'minlength') {
        return `${errors['minlength'].requiredLength} caracters minimum`;
      } else if (key === 'pattern') {
        return 'time must be in hhmmss format';
      }
    }
    return null;
  }

  addRunner(): void {
    if (this.runnerForm.invalid) {
      this.runnerForm.markAllAsTouched();
      return;
    }

    try {
      this.raceService.addRunner(this.runnerForm.value).subscribe();
      alert(`Runner ${this.runnerForm.value.first_name} ${this.runnerForm.value.last_name} added successfuly`);
      this.runnerForm.reset();
      this.activeModal.close();
      window.location.reload();
    } catch (error) {
      throw error;
    }
  }

  closeModal() {
    this.activeModal.close();
  }
}
