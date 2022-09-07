import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/user-services/User';
import { UserService } from 'src/app/user-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string | undefined;
  firstName: string;
  lastName: string;
  error: string | undefined;
  cardStyle: string;
  users: User[]

  constructor(private router:Router, private cookieService: CookieService, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers().then(data => (this.users = data));
  }

  onSubmit(){
    this.users.forEach(element => {
      if(this.username == element.username){
        if(this.password == element.password){
          this.cookieService.set('username', this.username);
          this.router.navigateByUrl('/dashboard');
        }
      }
    });
  }
}
