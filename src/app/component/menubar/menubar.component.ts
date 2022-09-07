import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/user-services/User';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @Output() userDataEvent: EventEmitter<User> = new EventEmitter();

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {}

  logout(){
    this.router.navigateByUrl("/");
  }

  receive(data: any){
    this.userDataEvent.emit(data);
  }

  // method for calling message service notification on Update Page button
  showViaService() {
    this.messageService.add({severity:'success', summary:'Update Page:', detail:'Successfully Saved!'});
  }
}
