import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { User } from 'src/app/user-services/User';
import { UserService } from 'src/app/user-services/user.service';

interface Socials{
  name: string;
  code: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  socials: Socials[];
  user!: User;
  @Output() userEvent: EventEmitter<User> = new EventEmitter();

  // form variables
  firstname: string;
  lastname: string;
  country: string;
  nationality: string;
  company: string;
  designation: string;
  workExp: number;
  selectedSocial: Socials;

  //sidebar variable
  display!: boolean;

  constructor(private userService: UserService, ) { 
    this.socials = [
      {name: 'Facebook', code: 'FB'},
      {name: 'Twitter', code: 'TW'},
      {name: 'Instagram', code: 'IG'},
      {name: 'LinkedIn', code: 'LI'}
    ];

    
  }

  ngOnInit(): void {}

  getUser(){ 
    this.user = {
      firstName: this.firstname,
      lastName: this.lastname,
      country: this.country,
      nationality: this.nationality,
      company: this.company,
      designation: this.designation,
      workExp: this.workExp,
      cv: '',
      dataSource: this.selectedSocial.name,
      username: this.firstname.toLowerCase() + this.lastname,
      password: 'admin'
    }
    this.userEvent.emit(this.user);
  }

  clear(){
    this.firstname = '';
    this.lastname = '';
    this.country = '';
    this.nationality = '';
    this.company = '';
    this.designation = '';
    this.workExp = 0;
  }
}
