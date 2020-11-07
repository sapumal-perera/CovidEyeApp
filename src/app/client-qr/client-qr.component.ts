import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-qr',
  templateUrl: './client-qr.component.html',
  styleUrls: ['./client-qr.component.css']
})
export class ClientQrComponent implements OnInit {
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
