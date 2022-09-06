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
  @Input() item: string;
  @Output() userDataEvent: EventEmitter<User> = new EventEmitter();

  message: string;
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {}

  logout(){
    this.router.navigateByUrl("/");
  }

  reload(){
    this.item = 'hello';
    this.router.navigateByUrl("/dashboard");
  }

  receive(data: any){
    this.userDataEvent.emit(data);
  }

  showViaService() {
    this.messageService.add({severity:'success', summary:'Update Page:', detail:'Successfully Saved!'});
  }
}
