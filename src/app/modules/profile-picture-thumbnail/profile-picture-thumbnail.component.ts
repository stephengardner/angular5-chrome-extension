import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'profile-picture-thumbnail',
  templateUrl: './profile-picture-thumbnail.component.html',
  styleUrls: ['./profile-picture-thumbnail.component.scss']
})
export class ProfilePictureThumbnailComponent implements OnInit {
  @Input() user:any;
  @Input() showInitials?: boolean;
  @Input() width?: number | string;
  @Input() height?: number | string;
  @Input() link?: string;
  private DEFAULTS = {
    height: 45,
    width: 45,
    background: 'purple',
    initials : '?'
  };
  constructor() { }
  public shouldShowInitials() {
    return false;
  }
  public hasProfilePicture() {
    return this.user &&
      this.user.profile_picture &&
      this.user.profile_picture.thumbnail.url &&
      this.user.profile_picture.thumbnail.url.indexOf('default') == -1;
  }
  public getProfilePictureUrl(): string {
    return this.user.profile_picture.thumbnail.url
  }
  ngOnInit() {
    this.width = (this.width || this.DEFAULTS.width) + 'px';
    this.height = (this.height || this.DEFAULTS.height) + 'px';
  }
  catchClickIfEmptyHref($event) {
    if(!this.getHref()) { $event.preventDefault(); }
  }
  getHref() {
    let user = this.user,
      state,
      urlName
      ;
    if(!user){
      return undefined;
    }
    if(!user.kind) {
      console.error('kind required on user:', user);
      return;
    }
    if(!user.urlName) {
      console.log('[Profile Picture Thumbnail] no user.urlName on user:', user);
      return;
    }
    if(user.kind == 'client') {
      return '/client/' + user.urlName;
    }
    else if(user.kind == 'trainer') {
      return '/' + user.urlName;
    }
    return '/';
  }
  getProfileSref(): string {
    let user = this.user,
      state,
      urlName
      ;
    if(!this.link || !user) return;
    if(!user.kind) {
      console.error('kind required on user:', user);
      return;
    }
    if(!user.urlName) {
      return;
    }
    if(user.kind == 'client') {
      state = 'clientProfile';
    }
    else if(user.kind == 'trainer') {
      state = 'trainerProfile'
    }
    if(!state) {
      console.error('State required');
      return;
    }
    return state + "({urlName : '" + user.urlName + "'})";
  }
  getInitials() {
    const hasFirstName = this.user && this.user.name && this.user.name.first;
    const hasLastName =  this.user && this.user.name && this.user.name.last;
    if(hasFirstName && this.user.name.first == 'Anonymous' && hasLastName && this.user.name.last == 'Trainer') {
      return this.DEFAULTS.initials;
    }
    if(hasFirstName && hasLastName) return this.user.name.first.charAt(0) + this.user.name.last.charAt(0);
    else if(hasFirstName) return this.user.name.first.charAt(0);
    else return this.DEFAULTS.initials;
  }
  getBackgroundColor(): string {
    if(!this.user || !this.user.color) {
      return this.DEFAULTS.background;
    }
    return this.user.color;
  }
}
