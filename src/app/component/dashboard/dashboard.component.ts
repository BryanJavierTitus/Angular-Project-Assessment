import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user-services/User';
import { UserService } from 'src/app/user-services/user.service';
import { LoginComponent } from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { SidebarComponent } from '../sidebar/sidebar.component';

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
    // socials dropdown variables
    socials: Socials[];
    selectedSocial: Socials;

    // admin dashboard variables
    username: string;
    users!: User[];
    user!: User;
    adminUser: string;

    // required sidebar variable
    display: boolean;

    constructor(private userService: UserService, private cookieValue: CookieService,) { 
        this.socials = [
            {name: 'Facebook', code: 'FB'},
            {name: 'Twitter', code: 'TW'},
            {name: 'Instagram', code: 'IG'},
            {name: 'LinkedIn', code: 'LI'}
        ];
    }

    ngOnInit() {
        this.userService.getUsers().then(data => {
            this.users = data;
            this.username = this.cookieValue.get('username');
            const user =  <User>this.users.find(u => u.username === this.username);
            this.adminUser = `${user.firstName} ${user.lastName}`;
        });
    }

    receiveEvent(data: any){
        this.users.push(data);
    }

    getUser(lastName: string){
        const user = this.users.find(u => u.lastName === lastName);
        if (user) {
            this.user = user;
            this.display = true;
        }
    }

    close(){
        this.display = false;
    }
}
