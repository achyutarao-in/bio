import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BioService } from '../bio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() tabSelection: EventEmitter<any> = new EventEmitter();
  selectedTab: string;
  constructor(private bioService: BioService) { }

  ngOnInit() {
    this.bioService.getTabSelection
      .subscribe((tabName: string) => {
        this.selectedTab = tabName;
      });
  }
  navigateTo(selectedTab) {
    this.selectedTab = selectedTab;
    this.tabSelection.emit(selectedTab);
  }
}
