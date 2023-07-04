import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  constructor(public userService:  UserService) { }
  firstName = this.userService.currentUser.firstName
  ngOnInit(): void {
  }

}
