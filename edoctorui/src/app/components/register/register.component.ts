import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../utils/validation';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl(''),
    role: new FormControl(''),
    gender: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authservice:AuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email:['',Validators.required], 
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
            // Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),
          ],
        ],
        contact:['',Validators.required],
        role:['',Validators.required],
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
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    const { username,email,password,contact,role,gender } = this.form.value;
    this.authservice.userregister(username,email,password,contact,role,gender).subscribe(isAuthnticated=>{
      if(isAuthnticated) {
      }
      else{
        alert("User already exist");
      }
    })
  }
}
