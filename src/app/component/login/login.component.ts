import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  loggedIn: boolean | undefined;
  error: string | undefined;

  constructor(private router:Router){}
  ngOnInit(): void {
    this.loggedIn = false;
  }

  onClick(){
    if(this.username == "admin" && this.password == "dev"){
      this.router.navigateByUrl('/dashboard');
      this.loggedIn = true;
    }

  }
}
