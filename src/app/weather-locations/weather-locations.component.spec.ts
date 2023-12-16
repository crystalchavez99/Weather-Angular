import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocationsComponent } from './weather-locations.component';

describe('WeatherLocationsComponent', () => {
  let component: WeatherLocationsComponent;
  let fixture: ComponentFixture<WeatherLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
