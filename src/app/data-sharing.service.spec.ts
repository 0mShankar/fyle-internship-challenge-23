import { TestBed } from '@angular/core/testing';
import { DataSharingService } from './data-sharing.service';

describe('DataSharingService', () => {
  let service: DataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get data correctly', () => {
    const testData = { key: 'value' };
    service.setData(testData);
    const retrievedData = service.getData();
    expect(retrievedData).toEqual(testData);
  });

  it('should emit data when data is updated', (done) => {
    const testData = { key: 'value' };
    service.dataUpdated.subscribe((data) => {
      expect(data).toEqual(testData);
      done();
    });
    service.setData(testData);
  });

  it('should clear data correctly', () => {
    const testData = { key: 'value' };
    service.setData(testData);
    service.clearData();
    const retrievedData = service.getData();
    expect(retrievedData).toBeNull();
  });

  it('should not emit data when data is cleared', () => {
    const testData = { key: 'value' };
    let dataEmitted = false;
    service.dataUpdated.subscribe(() => (dataEmitted = true));
    service.setData(testData);
    service.clearData();
    expect(dataEmitted).toBeFalse();
  });

  it('should return false if data is not set', () => {
    const hasData = service.hasData();
    expect(hasData).toBeFalse();
  });

  it('should return true if data is set', () => {
    const testData = { key: 'value' };
    service.setData(testData);
    const hasData = service.hasData();
    expect(hasData).toBeTrue();
  });
});
