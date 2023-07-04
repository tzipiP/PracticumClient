import Child from "./Child";
import { Gender } from "./Gender";
import { HealthFund } from "./HealthFund";

export default class UserFromServer {
    constructor(public id:number,public firstName:string,public lastName:string,public identityNumber:number,public gender:Gender,
        public bornDate:Date,public healthFund:HealthFund,public Children:Child[]=[]){
    }
}