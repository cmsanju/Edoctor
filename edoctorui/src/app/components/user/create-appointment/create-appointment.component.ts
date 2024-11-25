import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HeaderComponent} from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-create-appointment',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    age: new FormControl(''),
    gender : new FormControl(''),
    Problem: new FormControl(''),
    case: new FormControl(''),
    Date: new FormControl(''),
    Time: new FormControl(''),
    doctor : new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private _router : Router,private authservice: AuthService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        age:['',Validators.required],
        gender:['',Validators.required],
        Problem: ['',Validators.required],
        case:['',Validators.required],
        Date:['',Validators.required],
        Time: ['', Validators.required],
        doctor:['',Validators.required]
      }
      
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    const { username,age,gender,Problem,Date,Time,doctor} = this.form.value;
    this.authservice.bookSlots(username,age,gender,Problem,Date,Time,doctor ).subscribe(isAuthnticated=>{
      if(isAuthnticated) {
      }
      else{
        alert("User already exist");
      }
    })
  }
}