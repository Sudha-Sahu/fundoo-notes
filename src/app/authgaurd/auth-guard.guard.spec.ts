import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuardGuard } from './auth-guard.guard';


describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule]
    });
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  
});
