import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import {HttpClientModule} from '@angular/common/http';
// import { RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, 
        MatSnackBarModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Submit', () => {
    component.onSubmit()
    expect(component.onSubmit).toBeTruthy();
  });
});
