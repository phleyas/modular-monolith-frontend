import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTable } from './locations-table';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { locationsInitialState } from '../../state/locations.reducer';

describe('LocationsTable', () => {
  let component: LocationsTable;
  let fixture: ComponentFixture<LocationsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsTable, HttpClientTestingModule],
      providers: [provideMockStore({ initialState: { locations: locationsInitialState } })],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
