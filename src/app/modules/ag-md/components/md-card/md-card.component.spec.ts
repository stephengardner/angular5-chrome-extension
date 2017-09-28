import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCardComponent } from './md-card.component';

describe('MdCardComponent', () => {
  let component: MdCardComponent;
  let fixture: ComponentFixture<MdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
