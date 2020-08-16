import { Component } from '@angular/core';
import { BioService } from './bio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'achubio';
  constructor(private bioService: BioService) {

  }
  navigateToTab(tabSelection) {
    document.querySelector('#' + tabSelection)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  onSectionChange(sectionId: string) {
    console.log('sectionId', sectionId);
    this.bioService.changeTab(sectionId);
  }
}
