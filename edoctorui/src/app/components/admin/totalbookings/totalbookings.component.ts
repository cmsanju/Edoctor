import { Component } from '@angular/core';
import { HeaderComponent } from "../../admin/header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-totalbookings',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './totalbookings.component.html',
  styleUrl: './totalbookings.component.css'
})
export class TotalbookingsComponent {
  public bookingsList:any=[];
  public userList:any=[];
  public doctorList:any=[];
  constructor(private activatedRoute: ActivatedRoute,private _router : Router,private authService: AuthService) {
    this.authService.getBookingList().subscribe(data =>{
      console.log(data);
       this.bookingsList=data.body;
    
    },(error)=>{console.log(error);});
    this.authService.getDoctorsList().subscribe(data =>{
      console.log(data);
       this.doctorList=data.body;
    
    },(error)=>{console.log(error);}) 

    this.authService.getUserList().subscribe(data =>{
      console.log(data);
       this.userList=data.body;
    
    },(error)=>{console.log(error);})
  };
  getPatient(id: any): string | undefined {
    // Find the user with the given ID
    const user = this.userList.find((user: any) => user.userId === id);
  
    // If user is found, return userName or fullName
    if (user) {
      //console.log(user.fullName, user.userName);
      return user.fullName ? user.fullName : user.userName;
    }
  
    // If no user is found, return undefined
    return undefined;
  }
  getDoctor(id: any): string | undefined{
 // Find the user with the given ID
 const user = this.doctorList.find((user: any) => user.doctorId === id);
  
 // If user is found, return userName or fullName
 if (user) {
   //console.log(user.fullName, user.userName);
   return user.doctorName;
 }

 // If no user is found, return undefined
 return undefined;
  }
}
