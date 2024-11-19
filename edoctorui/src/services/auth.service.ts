
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
  private usersUrl ='';
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
  logout() {
    const confirmation = window.confirm('Are you sure you want to logout?');
    if (confirmation) {
      localStorage.removeItem('session');
      this._router.navigateByUrl('/login');
    }else{
      
    }
   
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('session');
  }
}