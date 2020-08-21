import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/earlylife.json';

interface IContent {
  title: string;
  sections: ({image: string; text: string})[];
}

@Component({
  selector: 'app-early-life',
  templateUrl: './early-life.component.html',
  styleUrls: ['./early-life.component.scss']
})
export class EarlyLifeComponent implements OnInit {

  content: IContent = (content as any).default;
  constructor() { }

  ngOnInit() {
  }

}
