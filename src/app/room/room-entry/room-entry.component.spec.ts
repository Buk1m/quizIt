import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEntryComponent } from './room-entry.component';

describe('RoomEntryComponent', () => {
  let component: RoomEntryComponent;
  let fixture: ComponentFixture<RoomEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
