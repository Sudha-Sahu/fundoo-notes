import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
