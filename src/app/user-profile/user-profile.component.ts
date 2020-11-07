import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  baseUrl = location.origin;
public userName: string;
public isEdit: boolean;
  public nic: any;
  public status: any;
  public district: any;
  public password: any;
  public contact: any;
  public address: any;
  public city: any;
  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem('Username');
    this.address = localStorage.getItem('address');
    this.contact = localStorage.getItem('contact');
    this.password = localStorage.getItem('password');
    this.district = localStorage.getItem('district');
    this.city = localStorage.getItem('city');
    this.status = localStorage.getItem('status');
    this.nic = localStorage.getItem('nic');
    this.isEdit = false;
  }

  enableEdit() {
    this.isEdit = true;
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
