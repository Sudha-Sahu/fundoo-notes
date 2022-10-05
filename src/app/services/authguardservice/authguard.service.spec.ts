import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthguardService } from './authguard.service';

describe('AuthguardService', () => {
  let service: AuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule]
    });
    service = TestBed.inject(AuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
