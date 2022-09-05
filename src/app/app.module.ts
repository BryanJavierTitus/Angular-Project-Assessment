import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {Card, CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import {MenubarComponent } from './component/menubar/menubar.component';
import {DividerModule} from 'primeng/divider';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { UserService } from './user-services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenubarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    MenubarModule,
    DividerModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    SidebarModule
  ],
  providers: [UserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
