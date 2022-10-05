import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { GetAllNotesComponent } from './get-all-notes.component';

describe('GetAllNotesComponent', () => {
  let component: GetAllNotesComponent;
  let fixture: ComponentFixture<GetAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllNotesComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getAll', () => {
    component.getAllNotes()
    expect(component.getAllNotes).toBeTruthy();
  });
});
