import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule,ReactiveFormsModule],
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
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

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
        role:['',Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    console.log(this.form.controls);
    //localStorage.setItem("Error",this.form.controls);
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
