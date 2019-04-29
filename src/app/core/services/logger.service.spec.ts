import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(LoggerService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('call console.log with formatting', () => {
    const spy: jest.SpyInstance = jest.spyOn(console, 'log');
    const testString = 'test info';
    expect(spy.mock.calls.length).toBe(0);
    service.info(testString);
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toContain(testString);
  });

  test('call console.error with formatting', () => {
    const spy: jest.SpyInstance = jest.spyOn(console, 'error');
    const testString = 'test error';
    expect(spy.mock.calls.length).toBe(0);
    service.error(testString);
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toContain(testString);
  });
});
