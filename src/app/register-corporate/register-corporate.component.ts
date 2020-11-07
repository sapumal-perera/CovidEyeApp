import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-corporate',
  templateUrl: './register-corporate.component.html',
  styleUrls: ['./register-corporate.component.css']
})
export class RegisterCorporateComponent implements OnInit {
  baseUrl = location.origin;
  public Username: any;
  public regNumber: any;
  public nic: any;
  public password: any;
  public status: any;
  public district: any;
  public contact: any;
  public address: any;
  public city: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {

  }

  register(): any {
    localStorage.setItem('regNumberCorporate', this.regNumber);
    localStorage.setItem('UsernameCorporate', this.Username);
    localStorage.setItem('addressCorporate', this.address);
    localStorage.setItem('contactCorporate', this.contact);
    localStorage.setItem('passwordCorporate', this.password);
    localStorage.setItem('districtCorporate', this.district);
    localStorage.setItem('cityCorporate', this.city);
    localStorage.setItem('statusCorporate', this.status);
    localStorage.setItem('nicCorporate', this.nic);
    window.alert('Registration Successful. Please login');
    this.router.navigate(['/']);
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
