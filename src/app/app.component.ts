import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PracticumClient';

  
    constructor() { }
    ngOnInit() {
    

    //  this.UserService.currentUser.next(this.UserService.getFromStorage())
    }
  
  
}
