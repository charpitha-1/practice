import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { RestInfo } from '../rest-into';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit{
  RestData:RestInfo[]=[]
  constructor(private http:HttpClient,private Srv:DataSourceService,private router:Router) {
  
     }
     ngOnInit(): void {
      this.Srv.GetAllRests()
      //this.http.get<RestInfo[]>('http://localhost:3004/restaurantInfo')
      .subscribe({
       next:(data)=>{
          this.RestData=data;
        }
      });
      //this.userData=this.Srv.GetAllUsers();
      //this.http.get<RestInfo[]>('http://localhost:3004/restaurantInfo')
    }
    GotoAddRestaurant(){
      this.router.navigate(['AddRestaurant'])
    }
}
