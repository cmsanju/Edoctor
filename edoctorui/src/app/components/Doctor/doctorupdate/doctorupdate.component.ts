import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,AbstractControl,FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-doctorupdate',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './doctorupdate.component.html',
  styleUrl: './doctorupdate.component.css'
})
export class DoctorupdateComponent {
form: FormGroup=new FormGroup({
  username: new FormControl(''),
  doctorId: new FormControl(''),
  speciality: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
});
submitted = false;
  constructor(private formBuilder: FormBuilder,private authservice:AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        doctorId:['',Validators.required],
        email:['',Validators.required],
        contact:['',Validators.required],
        speciality:['',Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    // console.log(this.form.controls);
    return this.form.controls;
  }

  onsubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    // const { username,email,contact,doctorId,speciality } = this.form.value;
    // this.authservice.updateDoctor(username,email,contact,doctorId,speciality).subscribe(isAuthnticated=>{
    //   if(isAuthnticated) {
    //   }
    // })
  }
}
