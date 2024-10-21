import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialog,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ConfirmEditDialogComponent } from './confirmedit-dialog.component';
import { CommonModule } from '@angular/common';

export interface Major {
  name: string;
}

@Component({
  selector: 'app-edit-overview-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
    ReactiveFormsModule,
    CommonModule,
  ],

  template: `
    <h2 style="text-align: center;" mat-dialog-title>Edit Information
      <button mat-icon-button mat-dialog-close style="position: absolute; right: 15px; top: 15px">
        <mat-icon>close</mat-icon>
      </button>
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form">
      <input formControlName="id" type="hidden" />
        <mat-form-field style="width: 500px;">
          <mat-label>Name:</mat-label>
          <input matInput formControlName="full_name" cdkFocusInitial />
          <mat-error *ngIf="form.get('full_name')?.invalid && form.get('full_name')?.touched">
            Name is required and must be at least 3 characters long.
          </mat-error>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
          <mat-label>Age:</mat-label>
          <input matInput type="number" formControlName="age" />
          <mat-error *ngIf="form.get('age')?.invalid && form.get('age')?.touched">
            Age is required and must be a number between 1 and 120.
          </mat-error>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
          <mat-label>Major:</mat-label>
          <input
            type="text"
            matInput
            formControlName="major"
            [matAutocomplete]="auto"
          />
          <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
            @for (option of filteredOptions | async; track option) {
              <mat-option [value]="option">{{option.name}}</mat-option>
            }
          </mat-autocomplete>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
          <mat-label>Email:</mat-label>
          <input matInput type="email" formControlName="email" />
          <mat-error *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
            Please enter a valid email address.
          </mat-error>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
          <mat-label>Phone number:</mat-label>
          <input matInput type="tel" formControlName="phone_number" />
          <mat-error *ngIf="form.get('phone_number')?.invalid && form.get('phone_number')?.touched">
            Phone number is required and must be 10 digits.
          </mat-error>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
          <mat-label>Address:</mat-label>
          <input matInput formControlName="address" />
        </mat-form-field><br>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()" cdkFocusInitial>Submit</button>
    </mat-dialog-actions>
  `,
})
export class EditOverviewDialogComponent implements OnInit {
  originalData: any;
  form: FormGroup;
  options: Major[] = [
    { name: 'Computer Science' },
    { name: 'Mathematics' },
    { name: 'Physics' },
    { name: 'Biology' },
    { name: 'Chemistry' },
    { name: 'Engineering' },
    { name: 'Art' },
    { name: 'Music' },
    { name: 'Dance' },
    { name: 'Theater' },
    { name: 'Film' },
    { name: 'History' },
    { name: 'Political Science' },
    { name: 'Economics' },
    { name: 'Psychology' },
    { name: 'Sociology' },
    { name: 'Anthropology' },
    { name: 'Philosophy' },
    { name: 'Religion' },
  ];
  filteredOptions: Observable<Major[]> | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      full_name: new FormControl(this.data.full_name, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(this.data.age, [Validators.required, Validators.min(1), Validators.max(120)]),
      major: new FormControl(this.data.major, Validators.required),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
      phone_number: new FormControl(this.data.phone_number, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      address: new FormControl(this.data.address),
    });
  }

  ngOnInit() {
    this.originalData = { ...this.data };
    this.filteredOptions = this.form.get('major')!.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
    this.form.get('major')!.setValue(this.data.major); // Ensure current major is displayed
  }

  onOptionSelected(event: any): void {
    this.form.get('major')!.setValue(event.option.value);
  }

  displayFn(major: Major | string): string {
    return typeof major === 'string' ? major : major ? major.name : '';
  }

  private _filter(name: string): Major[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  isDataChanged(): boolean {
    return JSON.stringify(this.form.value) !== JSON.stringify(this.originalData);
  }

  onNoClick(): void {
    if (this.isDataChanged()) {
      const dialogRef = this.dialog.open(ConfirmEditDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.dialogRef.close(this.form.value);
        } else {
          this.dialogRef.close();
        }
      });
    } else {
      this.dialogRef.close();
    }
  }

  onSaveClick(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else{
      this.form.markAllAsTouched();
    }
  }
}
