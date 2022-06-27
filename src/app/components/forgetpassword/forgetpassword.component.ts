import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

}
