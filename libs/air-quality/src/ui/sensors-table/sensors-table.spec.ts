import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsTable } from './sensors-table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { locationsInitialState } from '../../state/locations.reducer';
import { sensorsInitialState } from '../../state/sensors.reducer';

describe('SensorsTable', () => {
  let component: SensorsTable;
  let fixture: ComponentFixture<SensorsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorsTable, HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            locations: locationsInitialState,
            sensors: sensorsInitialState,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SensorsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
