import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { DisplayNotesComponent } from './display-notes.component';
import {MatDialogModule} from '@angular/material/dialog';

describe('DisplayNotesComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNotesComponent ],
      imports: [HttpClientModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
