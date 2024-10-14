import {ChangeDetectionStrategy, Component, inject, Inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-add-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatIconModule],
  template: `
    <h2 style="text-align: center;" mat-dialog-title>Add Information
    <button mat-icon-button mat-dialog-close style="position: absolute; right: 15px;; top: 15px">
    <mat-icon>close</mat-icon>
  </button>
    </h2>
    <mat-dialog-content>
        <mat-form-field style="width: 500px;">
            <mat-label>Name:</mat-label>
            <input matInput [(ngModel)]="data.full_name" cdkFocusInitial/>
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
            <mat-label>Age:</mat-label>
            <input matInput [(ngModel)]="data.age" />
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
            <mat-label>Major:</mat-label>
            <input matInput [(ngModel)]="data.major" />
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
            <mat-label>Email:</mat-label>
            <input matInput [(ngModel)]="data.email" />
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
            <mat-label>Phone number:</mat-label>
            <input matInput [(ngModel)]="data.phone_number" />
        </mat-form-field><br>
        <mat-form-field style="width: 500px;">
            <mat-label>Address:</mat-label>
            <input matInput [(ngModel)]="data.address" />
        </mat-form-field><br>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()" cdkFocusInitial>Submit</button>
    </mat-dialog-actions>
  `,
})
export class AddOverviewDialogComponent {
    data: any = {
        full_name: '',
        age: '',
        major: '',
        email: '',
        phone_number: '',
        address: ''

    };
    constructor(
        public dialogRef: MatDialogRef<AddOverviewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public incomingData: any
    ){}
  
  onNoClick(): void {
    
    this.dialogRef.close();
  }
  
  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }
}
