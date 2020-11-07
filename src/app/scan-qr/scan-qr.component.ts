import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.css']
})
export class ScanQrComponent implements OnInit {
  baseUrl = location.origin;
  constructor() { }

  ngOnInit() {
  }
   openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

   closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
