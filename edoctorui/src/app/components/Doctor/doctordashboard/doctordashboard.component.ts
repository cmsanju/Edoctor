import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { HeaderComponent } from "../../Doctor/header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-doctordashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './doctordashboard.component.html',
  styleUrl: './doctordashboard.component.css'
})
export class DoctordashboardComponent {
  public userdata:any=[];
  constructor(private activatedRoute: ActivatedRoute,private authService: AuthService) {
    this.userdata=localStorage.getItem("session");
    // console.log(this.userdata);
    this.userdata=JSON.parse(this.userdata) }
}
