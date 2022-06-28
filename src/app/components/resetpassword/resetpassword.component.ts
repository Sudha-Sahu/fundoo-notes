import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm !: FormGroup;
  token:any;

  constructor(private fb:FormBuilder, private user:UserService, private reset:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      pass: ['', [Validators.required, Validators.minLength(8)]],
      cpass: ['', Validators.required],
      service: ['advance']
    })
    this.token = this.reset.snapshot.params['token'];
    console.log(this.token)
  }
  onSubmit(){
    if(this.resetForm.valid){
      console.log("Valid data", this.resetForm.value);
      let data = {
        newPassword: this.resetForm.value.pass
      }
      this.user.resetpass(data, this.token).subscribe((result:any)=>{console.log(result);})
    }
    else{
      console.log("Invalid data", this.resetForm.value);
    }
  }
}
