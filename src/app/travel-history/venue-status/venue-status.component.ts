import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {

  name: string;
}

@Component({
  selector: 'app-venue-status',
  templateUrl: './venue-status.component.html',
  styleUrls: ['./venue-status.component.css']
})
export class VenueStatusComponent implements OnInit {
  baseUrl = location.origin;
  constructor(
    public dialogRef: MatDialogRef<VenueStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

}
