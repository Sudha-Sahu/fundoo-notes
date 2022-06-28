import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm !: FormGroup;

  constructor(private fb:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      service: ['advance']
    })
  }
  onSubmit(){
    if(this.forgetForm.valid){
      console.log("Valid data", this.forgetForm.value);
      let data = {
        email: this.forgetForm.value.email,
      }
      this.user.forget(data).subscribe((result:any)=>{console.log(result);})
    }
    else{
      console.log("Invalid data", this.forgetForm.value);
    }
  }


}
