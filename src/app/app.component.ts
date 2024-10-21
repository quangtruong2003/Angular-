import { Component, OnInit, viewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
//phân trang
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Dialog
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
//Edit
import { EditOverviewDialogComponent } from './edit-overview-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {ConfirmEditDialogComponent} from './confirmedit-dialog.component';
//Add
import { AddOverviewDialogComponent } from './add-overview-dialog.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatButtonModule, MatPaginatorModule,ConfirmDialogComponent, EditOverviewDialogComponent, FormsModule, MatDialogModule, AddOverviewDialogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  title = 'my-angular-app';
  displayedColumns: string[] = ['id', 'full_name', 'age', 'major', 'email', 'phone_number', 'address', 'actions'];
  
  dataToDisplay = [
      {
        "id": 1,
        "full_name": "Nguyen Van A",
        "age": 20,
        "major": "Computer Science",
        "email": "nguyenvana@example.com",
        "phone_number": "0912345678",
        "address": "123 Le Loi, Hanoi"
      },
      {
        "id": 2,
        "full_name": "Le Thi B",
        "age": 21,
        "major": "Mechanical Engineering",
        "email": "lethib@example.com",
        "phone_number": "0987654321",
        "address": "456 Tran Phu, Ho Chi Minh City"
      },
      {
        "id": 3,
        "full_name": "Tran Van C",
        "age": 22,
        "major": "Mathematics",
        "email": "tranvanc@example.com",
        "phone_number": "0932123456",
        "address": "789 Nguyen Trai, Da Nang"
      },
      {
        "id": 4,
        "full_name": "Pham Thi D",
        "age": 20,
        "major": "Physics",
        "email": "phamthid@example.com",
        "phone_number": "0923456789",
        "address": "321 Hai Ba Trung, Hue"
      },
      {
        "id": 5,
        "full_name": "Hoang Van E",
        "age": 23,
        "major": "Electrical Engineering",
        "email": "hoangvane@example.com",
        "phone_number": "0912341234",
        "address": "567 Le Duan, Hanoi"
      },
      {
        "id": 6,
        "full_name": "Bui Thi F",
        "age": 22,
        "major": "Chemistry",
        "email": "buithif@example.com",
        "phone_number": "0967893456",
        "address": "678 Tran Hung Dao, Nha Trang"
      },
      {
        "id": 7,
        "full_name": "Ngo Van G",
        "age": 21,
        "major": "Biology",
        "email": "ngovang@example.com",
        "phone_number": "0976512345",
        "address": "234 Ba Trieu, Haiphong"
      },
      {
        "id": 8,
        "full_name": "Do Thi H",
        "age": 20,
        "major": "Business Administration",
        "email": "dothih@example.com",
        "phone_number": "0912340987",
        "address": "123 Nguyen Hue, Da Nang"
      },
      {
        "id": 9,
        "full_name": "Vo Van I",
        "age": 24,
        "major": "Civil Engineering",
        "email": "vovani@example.com",
        "phone_number": "0987435678",
        "address": "456 Le Thanh Ton, Hue"
      },
      {
        "id": 10,
        "full_name": "Phan Thi J",
        "age": 19,
        "major": "Information Technology",
        "email": "phanthij@example.com",
        "phone_number": "0912367890",
        "address": "789 Phan Chau Trinh, Can Tho"
      },
      {
        "id": 11,
        "full_name": "Nguyen Van K",
        "age": 20,
        "major": "Environmental Science",
        "email": "nguyenvank@example.com",
        "phone_number": "0934567890",
        "address": "321 Tran Hung Dao, Ho Chi Minh City"
      },
      {
        "id": 12,
        "full_name": "Le Thi L",
        "age": 22,
        "major": "Architecture",
        "email": "lethil@example.com",
        "phone_number": "0923987654",
        "address": "123 Nguyen Van Linh, Haiphong"
      },
      {
        "id": 13,
        "full_name": "Tran Van M",
        "age": 21,
        "major": "Mechanical Engineering",
        "email": "tranvanm@example.com",
        "phone_number": "0912456789",
        "address": "567 Hoang Hoa Tham, Da Nang"
      },
      {
        "id": 14,
        "full_name": "Pham Thi N",
        "age": 23,
        "major": "Economics",
        "email": "phamthin@example.com",
        "phone_number": "0978945612",
        "address": "456 Dien Bien Phu, Hue"
      },
      {
        "id": 15,
        "full_name": "Hoang Van O",
        "age": 20,
        "major": "Law",
        "email": "hoangvano@example.com",
        "phone_number": "0981234567",
        "address": "678 Hai Ba Trung, Ho Chi Minh City"
      },
      {
        "id": 16,
        "full_name": "Bui Thi P",
        "age": 22,
        "major": "Psychology",
        "email": "buithip@example.com",
        "phone_number": "0912783456",
        "address": "234 Le Van Sy, Hanoi"
      },
      {
        "id": 17,
        "full_name": "Ngo Van Q",
        "age": 19,
        "major": "Sociology",
        "email": "ngovanq@example.com",
        "phone_number": "0932129876",
        "address": "789 Dinh Tien Hoang, Nha Trang"
      },
      {
        "id": 18,
        "full_name": "Do Thi R",
        "age": 21,
        "major": "Computer Engineering",
        "email": "dothir@example.com",
        "phone_number": "0912341123",
        "address": "321 Nguyen Tat Thanh, Hue"
      },
      {
        "id": 19,
        "full_name": "Vo Van S",
        "age": 24,
        "major": "Political Science",
        "email": "vovans@example.com",
        "phone_number": "0987234512",
        "address": "456 Ton Duc Thang, Ho Chi Minh City"
      },
      {
        "id": 20,
        "full_name": "Phan Thi T",
        "age": 20,
        "major": "Pharmacy",
        "email": "phanthit@example.com",
        "phone_number": "0912789543",
        "address": "123 Le Loi, Can Tho"
      }
    
    
  ];

  dataSource = new MatTableDataSource<any>(this.dataToDisplay);

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.dataToDisplay);
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // addData() {
  //   const dialogRef = this.dialog.open(AddOverviewDialogComponent, {
  //     width: '800px',
  //   });
  
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       const newId = this.dataSource.data.length > 0
  //         ? Math.max(...this.dataSource.data.map((item: any) => item.id)) + 1
  //         : 1;
  
  //       const newData = { id: newId, ...result };
  //       this.dataSource.data = [...this.dataSource.data, newData];
  //     }
  //   });
  // }
  

  
  // editData(element: any) {
  //   const dialogRef = this.dialog.open(EditOverviewDialogComponent, {
  //     width: '800px',
  //     data: {...element},
  //     disableClose: true, // không cho click ra ngoài để tắt dialog
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
      
  //     if (result){
        
  //       this.dataSource.data = this.dataSource.data.map((item: any) => {
  //         if (item.id === result.id) {
            
  //           return result;
  //         }
          
  //         return item;
  //       });
  //     }
  //   });
    
  //   // console.log('Editing:', element);
  // }


  manageData(element?: any) {
    if (element) {
      // Edit existing data
      const dialogRef = this.dialog.open(EditOverviewDialogComponent, {
        width: '800px',
        data: { ...element },
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.dataSource.data = this.dataSource.data.map((item: any) =>
            item.id === result.id ? result : item
          );
        }
      });
    } else {
      // Add new data
      const dialogRef = this.dialog.open(AddOverviewDialogComponent, {
        width: '800px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const newId = this.dataSource.data.length > 0
            ? Math.max(...this.dataSource.data.map((item: any) => item.id)) + 1
            : 1;

          const newData = { id: newId, ...result };
          this.dataSource.data = [...this.dataSource.data, newData];
        }
      });
    }
  }


  constructor(public dialog: MatDialog) { }
  deleteData(element: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataSource.data=this.dataSource.data.filter((item: any) => item.id !== element.id);
      }
    });
    //this.dataSource.data = this.dataSource.data.filter((item: any) => item.id !== element.id);
  }
}
