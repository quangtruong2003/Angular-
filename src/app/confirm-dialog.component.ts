import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Xác nhận xóa</h2>
    <mat-dialog-content>Bạn có chắc chắn muốn xóa bạn này?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="true">Xác nhận</button>
      <button mat-button mat-dialog-close="">Hủy</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {}
