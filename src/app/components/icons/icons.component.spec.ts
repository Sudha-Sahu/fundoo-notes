import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { IconsComponent } from './icons.component';
// import { RouterModule, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
      imports: [HttpClientModule, AppRoutingModule, MatSnackBarModule, MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('archive', () => {
    component.archNote()
    expect(component.archNote).toBeTruthy();
  });
  it('delete', () => {
    component.delNote()
    expect(component.delNote).toBeTruthy();
  });
});
