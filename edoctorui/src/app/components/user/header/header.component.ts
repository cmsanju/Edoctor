import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public userdata:any=[];
  constructor(private activatedRoute: ActivatedRoute,private _router : Router,private authService: AuthService) {
    this.userdata=localStorage.getItem("session");
    // console.log(this.userdata);
    this.userdata=JSON.parse(this.userdata) }
    update(){
      this._router.navigate(['/patientupdate']);
    }
    navigate(){
    this._router.navigate(['/create-appointment']);
  }
   logout(){
    this.authService.logout();
  }
  home(){
    this._router.navigate(['/userdashboard']);
  }
}
