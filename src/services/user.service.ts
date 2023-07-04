import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/models/User';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
import Child from 'src/models/Child';
import UserFromServer from 'src/models/UserFromServer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { }
  //currentUser = new BehaviorSubject<User>(null);
  
  isAddChild: boolean = false;
  // children: Child[] = []

  cArr: Child[] =[]


  currentUser: User = new User(null, null, null, null,null,null,this.cArr);
  currentChild: Child = new Child( null, null, null,null);

  baseRouteUrl = `${environment.baseUrl}/User`
  
  getAllUsers() {
    return this.http.get<User[]>(`${this.baseRouteUrl}`).subscribe(succ => {
      console.log(succ);
    });
;
  }
  getUserById(id: number) {
    return this.http.get<User>(`${this.baseRouteUrl}/GetUserById/${id}`).subscribe(succ => {
      console.log(succ);
    });

  }

  addUser(u: User) {
    return this.http.post<UserFromServer>(`${this.baseRouteUrl}`, u).subscribe(succ=>{
      let u= succ;
  for (var i=0;i<this.cArr.length;i++)   {
    this.addUserChild(this.cArr[i],u.id);

  } 
    });
  }
  addUserChild(c: Child,fatherId:number) {
    const child = {
      "id": 0,
      "name": c.name,
      "bornDate": c.bornDate,
      "identityNumber": c.identityNumber.toString(),
      "fatherId": fatherId
    }
    console.log("child"+child)
    return this.http.post<Child>(`${this.baseRouteUrl}/Children`, child);
  }
}