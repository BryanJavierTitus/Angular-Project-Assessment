import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user-services/User';
import { UserService } from 'src/app/user-services/user.service';
import { LoginComponent } from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';

interface Socials {
    name: string,
    code: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    socials: Socials[];
    selectedSocial: Socials | undefined;
    username: string;
    users: User[];
    login: LoginComponent;
    display!: boolean;

    constructor(private userService: UserService, private cookieValue: CookieService,) { 
        this.socials = [
            {name: 'Facebook', code: 'FB'},
            {name: 'Twitter', code: 'TW'},
            {name: 'Instagram', code: 'IG'},
            {name: 'LinkedIn', code: 'LI'}
        ];
    }

    ngOnInit() {
        this.userService.getUsers().then(data => (this.users = data));
        this.username = this.cookieValue.get('username');
    }


}
