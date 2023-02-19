import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

import { ListInvestmentsService } from './list-investments.service';
import { Investments } from '../model/investments';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockList: Array<Investments> = [
    {
      name: 'Banco1',
      value: 100
    },
    {
      name: 'Banco2',
      value: 100
    },
    {
      name: 'Banco3',
      value: 100
    },
    {
      name: 'Banco4',
      value: 100
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
