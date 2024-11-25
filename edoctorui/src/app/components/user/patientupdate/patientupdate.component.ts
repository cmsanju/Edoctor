import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-patientupdate',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ReactiveFormsModule, CommonModule,],
  templateUrl: './patientupdate.component.html',
  styleUrl: './patientupdate.component.css'
})
export class PatientupdateComponent {
  form: FormGroup = new FormGroup({
    patientId: new FormControl(''),
    email: new FormControl(''),
    patientName: new FormControl(''),
    mobileNo: new FormControl(''),
    gender: new FormControl(''),
    });
    submitted = false;
    constructor(private formBuilder: FormBuilder, private authservice: AuthService) {} 

    ngOnInit(): void {
      this.form = this.formBuilder.group(
        {
          patientId: ['', Validators.required],
          email:['',Validators.required],
          patientName:['',Validators.required],
          mobileNo:['',Validators.required],
          gender:['',Validators.required],
        }
      );
    }

    get f(): { [key: string]: AbstractControl } {
      // console.log(this.form.controls);
      return this.form.controls;
    }
    onSubmit(){
      this.submitted = true;
  
      if (this.form.invalid) {
        return;
      }};
}
