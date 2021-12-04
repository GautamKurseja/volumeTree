import { Component, OnInit } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"],
})
export class ListingComponent implements OnInit {
  student: any;
  name: any;
  food: any;
  update: boolean;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.students();
  }

  students() {
    this.student = [
      { name: "Ramesh", id: "2" },
      { name: "Suresh", id: "1" },
      { name: "Ranjit", id: "3" },
      { name: "Ajit", id: "4" },
      { name: "Rana", id: "5" },
      { name: "Patil", id: "6" },
    ];
  }

  delete(stu: any) {
    this.student = this.student.filter((item: any) => item.id !== stu);
    console.log(this.student, " this.student");
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((submit: any) => {
      if (submit) {
        this.food = submit;
        this.student.push({ name: this.food, id: Math.random() });
      } else {
        this.food = "Nothing...";
      }
    });
  }



  edit(stu) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((submit) => {
      if (submit) {
        this.food = submit;
        this.student.push({ name: this.food, id: Math.random() });
        this.student = this.student.filter((item: any) => item.id !== stu.id);
        console.log(this.student, " this.student");
      }
    });
  }

 

}
