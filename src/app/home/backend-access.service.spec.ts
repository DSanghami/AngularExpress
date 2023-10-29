import { TestBed } from '@angular/core/testing';
 
import { BackendAccessService2 } from './backend-access.service';
 
describe('BackendAccessService', () => {
  let service: BackendAccessService2;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendAccessService2);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});