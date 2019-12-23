import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private _albums : Array<any> = [];

  constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    _lightboxConfig.disableScrolling = true;
    _lightboxConfig.centerVertically = true;
    _lightboxConfig.alwaysShowNavOnTouchDevices = true;
    _lightboxConfig.wrapAround = true;
    for (let i = 1; i <= 14; i++) {
      const src = './../../../assets/images/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = './../../../assets/images/' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
   }

   open(index: number): void {
    console.log(index);
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    console.log("closed");
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
  }

}