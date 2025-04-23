import { Injectable } from '@angular/core';
import { UserInfo, UserInfoNew } from './user-info';
import { RestInfo } from './rest-into';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  UserList:UserInfo[]=[];
  baseAddress:string="http://localhost:3004/"
  constructor(private http:HttpClient) {

   }
  AddNewUserEntry(data:UserInfoNew):Observable<UserInfoNew>{
    return this.http.post(`${this.baseAddress}userInfo`,data)
  }
  GetAllUsers():Observable<UserInfoNew[]>{
    return this.http.get<UserInfoNew[]>(`${this.baseAddress}userInfo`)
  }
  GetUserDataById(id:any):Observable<UserInfoNew>{
    //url format http://localhost:3004/userInfo/id
    return this.http.get(`${this.baseAddress}userInfo/${id}`)
  }
  DeleteUser(id:any):Observable<any>{
    //url format http://localhost:3004/userInfo/id
    return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }
  EditUser(inp:UserInfoNew):Observable<any>
  {
    return this.http.put(`${this.baseAddress}userInfo/${inp.id}`,inp)
  }

}
