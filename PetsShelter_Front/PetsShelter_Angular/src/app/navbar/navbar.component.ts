import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  faShieldDog = faShieldDog;

  isAuthorized: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://127.0.0.1:8000/api/user', { withCredentials: true })
      .subscribe(
        (res: any) => {
          console.log(res.name);
        },
        err => {
          console.log('Niezalogowany');
        }
      );
  }
}
