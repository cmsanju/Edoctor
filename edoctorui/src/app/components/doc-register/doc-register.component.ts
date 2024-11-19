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
@Component({
  selector: 'app-doctor-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './doc-register.component.html',
  styleUrl: './doc-register.component.css'
})
export class DoctorRegistrationComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    specialization:new FormControl(''),
    experience:new FormControl(''),
    place: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private _router : Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email:['',Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        specialization:['',Validators.required],
        experience:['',Validators.required],
        place:['',Validators.required],
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
  }
}
