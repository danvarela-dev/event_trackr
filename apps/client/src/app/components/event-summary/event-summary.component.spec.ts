import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventSummaryComponent } from './event-summary.component';

describe('EventSummaryComponent', () => {
  let component: EventSummaryComponent;
  let fixture: ComponentFixture<EventSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
