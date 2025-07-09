import { TestBed } from '@angular/core/testing';

import { archivoService } from './archivos.service';

describe('ArchivosService', () => {
  let service: archivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(archivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
