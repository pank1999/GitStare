import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  userEventData$!:Observable<any>;
  userData$!:Observable<any>;
  avatar_url!:Observable<any>;
  bgColor!:string;

  ngOnInit(): void {
  }

  submitForm(data:NgForm){
      this.userEventData$= this.http.get(`https://api.github.com/users/${data.value.username}/events`);
      this.userData$= this.http.get(`https://api.github.com/users/${data.value.username}`).pipe(toArray());

      this
      console.log(data.value);
    }
}
