import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-qr-corporate',
  templateUrl: './qr-corporate.component.html',
  styleUrls: ['./qr-corporate.component.css']
})
export class QrCorporateComponent implements OnInit {
  baseUrl = location.origin;
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}
  ngOnInit() {
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  redirectToScan() {
    this.router.navigate(['/client-qr']);  }
}
