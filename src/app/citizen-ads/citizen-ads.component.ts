import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/citizenads.json';

interface IContent {
  title: string;
  sections: ({image: string; text: string})[];
}

@Component({
  selector: 'app-citizen-ads',
  templateUrl: './citizen-ads.component.html',
  styleUrls: ['./citizen-ads.component.scss']
})
export class CitizenAdsComponent implements OnInit {

  content: IContent = (content as any).default;
  constructor() { }

  ngOnInit() {
  }

}
