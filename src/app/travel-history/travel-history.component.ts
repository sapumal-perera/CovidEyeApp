import { Component, OnInit } from '@angular/core';
import {VenueStatusComponent} from './venue-status/venue-status.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.css']
})
export class TravelHistoryComponent implements OnInit {
  baseUrl = location.origin;
  columnDefs = [
    { field: 'date', sortable: true, filter: true },
    { field: 'location', sortable: true, filter: true },
    { field: 'safety', sortable: true, filter: true,
      cellStyle: params => params.value === 'Safe' ?
        {backgroundColor: 'green', fontWeight: 'bold', color: 'white'} : {backgroundColor: 'red', fontWeight: 'bold', color: 'white'} }
  ];

  rowData = [
    { date: '07.10.2020', location: 'Keels - Nugegoda', safety: 'Safe' },
    { date: '07.10.2020', location: 'Spa Ceylon', safety: 'Unsafe' },
    { date: '06.10.2020', location: 'Pizza Hut - Dehiwala', safety: 'Safe' },
    { date: '07.10.2020', location: 'Keels - Nugegoda', safety: 'Safe' },
    { date: '07.10.2020', location: 'Book Fair - BMICH', safety: 'Unsafe' },
    { date: '06.10.2020', location: 'Pizza Hut - Town Hall', safety: 'Safe' },
    { date: '07.10.2020', location: 'KFC - Nugegoda', safety: 'Safe' },
    { date: '07.10.2020', location: 'Waters Edge', safety: 'Unsafe' },
    { date: '06.10.2020', location: 'Corona land - Colombo', safety: 'UnSafe' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VenueStatusComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
