import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  public userdata:any=[];
  constructor(private activatedRoute: ActivatedRoute,private _router : Router,private authService: AuthService) {
    this.userdata=localStorage.getItem("session");
    console.log(this.userdata);
    this.userdata=JSON.parse(this.userdata) }
  navigate(){
    this._router.navigate(['/create-appointment']);
  }
   logout(){
    this.authService.logout();
  }
}