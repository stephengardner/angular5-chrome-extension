import { ProfilePictureThumbnailModule } from './profile-picture-thumbnail.module';

describe('ProfilePictureThumbnailModule', () => {
  let profilePictureThumbnailModule: ProfilePictureThumbnailModule;

  beforeEach(() => {
    profilePictureThumbnailModule = new ProfilePictureThumbnailModule();
  });

  it('should create an instance', () => {
    expect(profilePictureThumbnailModule).toBeTruthy();
  });
});
