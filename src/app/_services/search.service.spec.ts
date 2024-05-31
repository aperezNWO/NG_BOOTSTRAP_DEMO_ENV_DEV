import { TestBed } from '@angular/core/testing';
import { CountrySearchService } from './search.service';


describe('CountryService', () => {
  let service: CountrySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
