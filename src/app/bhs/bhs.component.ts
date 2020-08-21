import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/text_bits.json';

@Component({
  selector: 'app-bhs',
  templateUrl: './bhs.component.html',
  styleUrls: ['./bhs.component.scss']
})
export class BhsComponent implements OnInit {

  paras: string[] = content.bhs;
  constructor() { }

  ngOnInit() {
  }

}
