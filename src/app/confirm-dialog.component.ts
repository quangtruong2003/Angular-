import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-confirm-dialog:not(p)',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>Delete?
    <button mat-icon-button mat-dialog-close style="position: absolute; right: 15px;; top: 15px">
    <mat-icon>close</mat-icon>
  </button>
    </h2>
    <mat-dialog-content>Do you want delete it?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="true">Submit</button>
      <button mat-button mat-dialog-close="">Cancel</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {}
