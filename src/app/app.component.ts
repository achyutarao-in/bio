import { Component } from '@angular/core';
import { BioService } from './bio.service';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import * as content from '../content/landing/gallery.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private bioService: BioService) {

  }
  galleryOptions: NgxGalleryOptions[] = [
    {
      previewCloseOnClick: true,
      previewCloseOnEsc: true,
      imageSwipe: true,
      thumbnailsSwipe: true,
      width: '70%',
      imageAutoPlay: true,
      imageAutoPlayPauseOnHover: true,
      previewAutoPlay: true,
      previewKeyboardNavigation: true,
      previewAutoPlayPauseOnHover: true,
      imageSize: 'contain',
      // thumbnailSize: 'contain',
      thumbnailsColumns: 6
    },
    { breakpoint: 500, width: '300px', thumbnailsColumns: 3 },
    { breakpoint: 300, width: '100%', thumbnailsColumns: 2 }
  ];

  galleryImages: NgxGalleryImage[] = content.galleryImages.map(a => new Object({ big: a, small: a, medium: a }));


  navigateToTab(tabSelection) {
    document.querySelector('#' + tabSelection)
      .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  onSectionChange(sectionId: string) {
    console.log('sectionId', sectionId);
    this.bioService.changeTab(sectionId);
  }
}
