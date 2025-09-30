import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsDropdown } from './locations-dropdown';

describe('LocationsDropdown', () => {
  let component: LocationsDropdown;
  let fixture: ComponentFixture<LocationsDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationsDropdown);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('country', 'Germany');
    fixture.componentRef.setInput('city', 'Cologne');
    fixture.componentRef.setInput('locations', []);
    fixture.componentRef.setInput('disabled', false);
    fixture.componentRef.setInput('selectedLocationId', undefined);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
