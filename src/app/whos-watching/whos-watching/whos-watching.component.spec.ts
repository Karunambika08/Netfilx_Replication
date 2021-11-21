import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosWatchingComponent } from './whos-watching.component';

describe('WhosWatchingComponent', () => {
  let component: WhosWatchingComponent;
  let fixture: ComponentFixture<WhosWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosWatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
