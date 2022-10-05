import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CreatenoteComponent } from './createnote.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

fdescribe('CreatenoteComponent', () => {
  let component: CreatenoteComponent;
  let fixture: ComponentFixture<CreatenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteComponent ],
      imports: [HttpClientModule, MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('close', () => {
    component.close()
    expect(component.close).toBeTruthy();
  });
});
