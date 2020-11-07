import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-status',
  templateUrl: './share-status.component.html',
  styleUrls: ['./share-status.component.css']
})
export class ShareStatusComponent implements OnInit {
  baseUrl = location.origin;
  constructor() { }

  ngOnInit() {
  }
  sendAlert() {
    window.alert('Alert Successfully sent to Officials');
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
