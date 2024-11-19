import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-doctordashboard',
  standalone: true,
  imports: [],
  templateUrl: './doctordashboard.component.html',
  styleUrl: './doctordashboard.component.css'
})
export class DoctordashboardComponent {
  public userdata:any=[];
  constructor(private activatedRoute: ActivatedRoute,private _router : Router,private authService: AuthService) {
    this.userdata=localStorage.getItem("session");
    console.log(this.userdata);
    this.userdata=JSON.parse(this.userdata) }
  navigate(){
    this._router.navigate(['/appointmentlist']);
  }
   logout(){
    this.authService.logout();
  }
}
