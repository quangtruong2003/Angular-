// src/app/app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { EditOverviewDialogComponent } from './edit-overview-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddOverviewDialogComponent } from './add-overview-dialog.component';

import { DataService, User } from './services/data.service';
import{ HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    ConfirmDialogComponent,
    EditOverviewDialogComponent,
    FormsModule,
    MatDialogModule,
    AddOverviewDialogComponent,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    DataService,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  title = 'my-angular-app';
  displayedColumns: string[] = ['id', 'full_name', 'age', 'major', 'email', 'phone_number', 'address', 'actions'];
  

  
  dataToDisplay: User[] = []; 
  
  dataSource = new MatTableDataSource<User>(this.dataToDisplay);

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.fetchData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchData(): void {
    this.dataService.getData().subscribe({
      next: (data: User[]) => {
        this.dataToDisplay = data;
        this.dataSource.data = this.dataToDisplay;
      },
      error: (error) => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
      }
    });
  }

  manageData(element?: User) {
    if (element) {
      // Edit 
      setTimeout(() => {
        const dialogRef = this.dialog.open(EditOverviewDialogComponent, {
        
          width: '800px',
          data: { ...element },
          disableClose: true,
        });
  
        dialogRef.afterClosed().subscribe((result: User | undefined) => {
          if (result) {
            this.dataSource.data = this.dataSource.data.map((item: User) =>
              item.id === result.id ? result : item
            );
          }
        });
      }, 500);

      
    } else {
      // Add 
      const dialogRef = this.dialog.open(AddOverviewDialogComponent, {
        width: '800px',
      });

      dialogRef.afterClosed().subscribe((result: Omit<User, 'id'> | undefined) => {
        if (result) {
          const newId = this.dataSource.data.length > 0
            ? Math.max(...this.dataSource.data.map((item: User) => item.id)) + 1
            : 1;

          const newData: User = { id: newId, ...result };
          this.dataSource.data = [...this.dataSource.data, newData];
        }
      });
    }
  }

  deleteData(element: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataSource.data = this.dataSource.data.filter((item: User) => item.id !== element.id);
      }
    });
  }
}
