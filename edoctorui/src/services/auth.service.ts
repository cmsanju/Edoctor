
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,private _router : Router) { }
  private usersUrl:string ="";
  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          localStorage.setItem('session', JSON.stringify({ user }));
          return true;
        }
        return false;
      })
    );
  }
  userregister(username:string,email:string,password:string,contact:string,role:string,gender:string):Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        console.log(username,email,password,contact,role,gender);
        const user = users.find(u => u.username === username && u.role === role);
        if (user) {
          // localStorage.setItem('session', JSON.stringify({ user }));
          return false;
        }
        else{
          var newuser= [{
            "id": 1,
      "firstname":username,
      "lastname": username,
      "email": email,
      "mobile": contact,
      "password": password,
      "username": username,
      "role":"user" ,
      "gender": gender,
      "dob": "1989-08-12"
          }];
          // this.usersUrl.push(newuser);
          // console.log(this.usersUrl);
          return true;
        }
      })
    );
  }
  logout() {
    const confirmation = window.confirm('Are you sure you want to logout?');
    if (confirmation) {
      localStorage.removeItem('session');
      this._router.navigateByUrl('homepage');
    }else{
      
    }
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('session');
  }
  getDoctorsList(){
    var doctorList:any=[];
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
         users.forEach(user => {
            if(user.role == "doctor"){
              doctorList.push(user);
            }
         });
        //  console.log(users);
         return doctorList;
       
      })
    )
  }
  getPatientsList(){
    var doctorList:any=[];
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
         users.forEach(user => {
            if(user.role == "patient"){
              doctorList.push(user);
            }
         });
        //  console.log(users);
         return doctorList;
      })
    )
  }
  docregister(username:string,email:string,password:string,contact:string,role:string,gender:string):Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        console.log(username,email,password,contact,role,gender);
        const user = users.find(u => u.username === username && u.role === role);
        if (user) {
          // localStorage.setItem('session', JSON.stringify({ user }));
          return false;
        }
        else{
          var newuser= [{
            "id": 1,
      "fullname":username,
      "email": email,
      "password": password,
      "role":"doctor" ,
      "gender": gender,
      "dob": "1989-08-12"
          }];
          // this.usersUrl.push(newuser);
          // console.log(this.usersUrl);
          return true;
        }
      })
    );
  }
  addSlots(username:string,email:string,specialization:string,amslot:string,pmslot:string,patienttype:string,date:string):Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        // console.log(username,email,specialization,amslot,pmslot,date,patienttype);
        const user = users.find(u => u.username === username && u.date === date);
        if (user) {
          // localStorage.setItem('session', JSON.stringify({ user }));
          return false;
        }
        else{
          var newuser= [{
            "id": 1,
            "username": username,
            "email":email,
            "specialization":specialization,
            "amslot":amslot,
            "pmslot": pmslot,
            "date": date,
            "patienttype": patienttype,
          }];
          // this.usersUrl.push(newuser);
          // console.log(this.usersUrl);
          return true;
        }
      })
    );
  }

  bookSlots(username:string,age:string,gender:string,Problem:string,Date:string,Time:string,doctor:string):Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        // console.log(username,email,specialization,amslot,pmslot,date,patienttype);
        const user = users.find(u => u.username === username && u.date === Date);
        if (user) {
          // localStorage.setItem('session', JSON.stringify({ user }));
          return false;
        }
        else{
          var newuser= [{
            "id": 1,
            "username": username,
            "age":age,
            "gender": gender,
            "Problem": Problem,
            "Time": Time,
            "Doctor":doctor,
            "date": Date,
          }];
          // this.usersUrl.push(newuser);
          // console.log(this.usersUrl);
          return true;
        }
      })
    );
  }
}