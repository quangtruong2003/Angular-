import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Edit Information</h2>
    <mat-dialog-content>
      
      <mat-form-field><p>Name:</p>
        <input matInput [(ngModel)]="data.full_name" placeholder="Name">
      </mat-form-field>
      
      <mat-form-field><p>Age:</p>
        <input matInput [(ngModel)]="data.age" placeholder="Age">
      </mat-form-field>
      
      <mat-form-field><p>Major:</p>
        <input matInput [(ngModel)]="data.major" placeholder="Major">
      </mat-form-field>
      
      <mat-form-field><p>Email:</p>
        <input matInput [(ngModel)]="data.email" placeholder="Email">
      </mat-form-field>
      
      <mat-form-field><p>Phone number:</p>
        <input matInput [(ngModel)]="data.phone_number" placeholder="Phone number">
      </mat-form-field>
      
      <mat-form-field><p>Address:</p>
        <input matInput [(ngModel)]="data.address" placeholder="Address">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()">Submit</button>
    </mat-dialog-actions>
  `,
})
export class EditOverviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
   onNoClick(): void {
    this.dialogRef.close();
   }
    onSaveClick(): void {
      this.dialogRef.close(this.data);
    }

}