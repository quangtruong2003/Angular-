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

@Component({
  selector: 'app-add-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  template: `
    <h2 style="text-align: center;" mat-dialog-title>Add Information</h2>
    <mat-dialog-content>
      <p>Name:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.full_name" placeholder="Nhập tên">
      </mat-form-field><br>
      <p>Age:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.age" placeholder="Nhập tuổi">
      </mat-form-field><br>
      <p>Major:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.major" placeholder="Nhập nghề">
      </mat-form-field><br>
      <p>Email:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.email" placeholder="Nhập Mail">
      </mat-form-field><br>
      <p>Phone number:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.phone_number" placeholder="Nhập số điện thoại">
      </mat-form-field><br>
      <p>Address:</p>
      <mat-form-field style="width:500px">
        <input matInput [(ngModel)]="data.address" placeholder="Nhập địa chỉ">
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
