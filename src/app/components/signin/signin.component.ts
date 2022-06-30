import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm !: FormGroup;

  constructor(private fb:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      service: ['advance']
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log("Valid data", this.loginForm.value);
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.pass,
        service: this.loginForm.value.service
      }
      this.user.login(data).subscribe((result:any)=>{console.log(result);
      localStorage.setItem('token', result.id)
      })
    }
    else{
      console.log("Invalid data", this.loginForm.value);
    }
  }

}
