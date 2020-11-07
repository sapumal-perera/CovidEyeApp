import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  baseUrl = location.origin;
  public userName: string;
  public password: string;
  public loginMsg: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {
  }
  onLoginSuccess() {
    if (this.userName === localStorage.getItem('nic') && this.password === localStorage.getItem('password')) {
      this.router.navigate(['/travel-history']);
    } else if (this.userName === localStorage.getItem('nicCorporate') && this.password === localStorage.getItem('passwordCorporate')) {
      this.router.navigate(['/qr-corp']);
    } else {
      this.loginMsg = 'Please enter valid credentials';
    }
  }

}
