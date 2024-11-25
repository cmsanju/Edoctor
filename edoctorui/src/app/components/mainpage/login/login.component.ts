import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from '../../utils/validation';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public userdata:any=[];
  public data='';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private _router : Router,private authservice:AuthService) {}
  ngOnInit(): void {
    // console.log(this.data);
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      }
    );
  }
  navigate(){
      this._router.navigate(['/doctordashboard']);
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

    // console.log(JSON.stringify(this.form.value, null, 2));
    const { username, password } = this.form.value;
    this.authservice.login(username, password).subscribe(isAuthnticated =>{
      if(isAuthnticated) {
        this.userdata=localStorage.getItem("session");
         this.userdata=JSON.parse(this.userdata);
         if(this.userdata.user.role == "patient"){
          this._router.navigate(['/userdashboard']);
         } else if(this.userdata.user.role == "doctor"){
          this._router.navigate(['/doctor']);
         }
         else if(this.userdata.user.role == "admin"){
          this._router.navigate(['/admindashboard']);
         }
        } else {
        alert('Invalid credentials');
  }
    })
  }
}