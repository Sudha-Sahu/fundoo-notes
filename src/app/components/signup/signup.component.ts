import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(private fb:FormBuilder, private user:UserService) { 

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      cpass: ['', Validators.required],
      service: ['advance']
    })
  }


  onSubmit(){
    if(this.registerForm.valid){
      console.log("Valid data", this.registerForm.value);
      let data = {
        firstName: this.registerForm.value.fname,
        lastName: this.registerForm.value.lname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.pass,
        service: this.registerForm.value.service
      }
      this.user.register(data).subscribe((result:any)=>{console.log(result);})
    }
    else{
      console.log("Invalid data", this.registerForm.value);
    }
  }
}
