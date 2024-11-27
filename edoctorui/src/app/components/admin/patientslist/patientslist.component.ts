import { Component } from '@angular/core';
import { HeaderComponent } from "../../admin/header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-patientslist',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './patientslist.component.html',
  styleUrl: './patientslist.component.css'
})
export class PatientslistComponent {
  public userList:any=[];
  public patientList:any=[];
  constructor(private activatedRoute: ActivatedRoute,private _router : Router,private authService: AuthService) {
    this.authService.getUserList().subscribe(data =>{
      console.log(data);
       this.userList=data.body;
    
    },(error)=>{console.log(error);})
  };
}
