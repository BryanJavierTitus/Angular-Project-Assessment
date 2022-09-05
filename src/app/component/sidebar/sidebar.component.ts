import { Component, OnInit } from '@angular/core';
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
  selectedSocial: Socials | undefined;
  display!: boolean;

  constructor(private userService: UserService) { 
    this.socials = [
      {name: 'Facebook', code: 'FB'},
      {name: 'Twitter', code: 'TW'},
      {name: 'Instagram', code: 'IG'},
      {name: 'LinkedIn', code: 'LI'}
  ];

  }

  ngOnInit(): void {
    

  }

}
