import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePictureThumbnailComponent } from './profile-picture-thumbnail.component';

describe('ProfilePictureThumbnailComponent', () => {
  let component: ProfilePictureThumbnailComponent;
  let fixture: ComponentFixture<ProfilePictureThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePictureThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
