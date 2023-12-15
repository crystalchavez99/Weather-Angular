import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityDetailComponent } from './weather-city-detail.component';

describe('WeatherCityDetailComponent', () => {
  let component: WeatherCityDetailComponent;
  let fixture: ComponentFixture<WeatherCityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCityDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherCityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
