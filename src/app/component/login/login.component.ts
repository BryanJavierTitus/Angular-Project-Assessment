import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: String | undefined;
  loggedIn: boolean | undefined;
  firstName: String;
  lastName: String;
  error: String | undefined;

  constructor(private router:Router, private cookieService: CookieService){}

  ngOnInit(): void {
    this.loggedIn = false;
  }

  onClick(){
    if(this.username == "bryanJavier" && this.password == "admin"){
      this.cookieService.set('username', this.username);
      this.router.navigateByUrl('/dashboard');
      this.loggedIn = true;
      
    }

    console.log(this.username);

  }
}
