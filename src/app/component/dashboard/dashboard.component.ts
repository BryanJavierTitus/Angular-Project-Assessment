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
    socials: Socials[];
    selectedSocial: Socials | undefined;
    username: string;
    users!: User[];
    user!: User;
    item: string;
    adminUser: string;
    message: any;
    login: LoginComponent;
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

    onSubmit(){
        this.item = 'hello'
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
