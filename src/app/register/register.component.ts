import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  baseUrl = location.origin;
  public Username: any;
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
    localStorage.setItem('Username', this.Username);
    localStorage.setItem('address', this.address);
    localStorage.setItem('contact', this.contact);
    localStorage.setItem('password', this.password);
    localStorage.setItem('district', this.district);
    localStorage.setItem('city', this.city);
    localStorage.setItem('status', this.status);
    localStorage.setItem('nic', this.nic);
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
