import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueStatusComponent } from './venue-status.component';

describe('VenueStatusComponent', () => {
  let component: VenueStatusComponent;
  let fixture: ComponentFixture<VenueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
