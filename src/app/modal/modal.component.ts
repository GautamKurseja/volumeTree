import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  name: any;

  food: any;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.name = data.name;
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @HostListener("document:keyup.escape") onClose() {
    this.onCancel();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.food);
  }
}
