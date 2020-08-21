import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/bhs.json';

interface IContent {
  title: string;
  sections: ({image: string; text: string})[];
}

@Component({
  selector: 'app-bhs',
  templateUrl: './bhs.component.html',
  styleUrls: ['./bhs.component.scss']
})
export class BhsComponent implements OnInit {

  content: IContent = (content as any).default;
  constructor() { }

  ngOnInit() {
  }

}
