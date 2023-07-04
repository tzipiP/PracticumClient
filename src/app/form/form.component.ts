import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import Child from 'src/models/Child';
import { UserService } from 'src/services/user.service';
import User from '../../models/User';
import { DatePipe } from '@angular/common';
import { Gender } from "../../models/Gender";
import { HealthFund } from "../../models/HealthFund";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  isAddChild: boolean = false;

  constructor(public userService: UserService) { }

  cArr: Child[] =[]

  today = new Date();

  healthFund: { name: string, code: number }[] =
  [{ name: 'Clalit', code: 1 }, { name: 'Meuchedet', code: 2 },
  { name: 'Leumit', code: 3 }, { name: 'Macabi', code: 4 }]

  cheakDateUser() {
    if (this.userService.currentUser.bornDate) {
      if (this.userService.currentUser.bornDate.getFullYear < this.today.getFullYear)
        return true;
    }
    return false;
  }
  cheakDateChild() {
    if (this.userService.currentChild.bornDate) {
      if (this.userService.currentChild.bornDate.getFullYear < this.today.getFullYear &&
        this.userService.currentChild.bornDate.getFullYear < this.userService.currentUser.bornDate.getFullYear)
        return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.userService.getAllUsers()
  }
  save() {
    this.userService.currentUser.healthFund = (Number)( this.userService.currentUser.healthFund)
    this.userService.currentUser.gender = (Number)(this.userService.currentUser.gender);
    this.cArr=this.userService.currentUser.Children;
   
     this.userService.addUser(this.userService.currentUser)
    this.userService.currentUser = new User(null, null, null, null, null, null, this.cArr);
    this.userService.currentChild = new Child(null, null, null,null);
this.userService.cArr=[]

    this.userService.isAddChild = false;

  }
  addChild() {
    this.isAddChild = false;

    if (this.userService.cArr == null)
      this.userService.cArr = [this.userService.currentChild]
    else
      this.userService.cArr.push(this.userService.currentChild)
      console.log(this.userService.cArr)
this.userService.currentChild = new Child(null, null, null,null);
    this.userService.isAddChild = false;
  }



}
