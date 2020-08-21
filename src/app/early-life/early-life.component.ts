import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/text_bits.json';

@Component({
  selector: 'app-early-life',
  templateUrl: './early-life.component.html',
  styleUrls: ['./early-life.component.scss']
})
export class EarlyLifeComponent implements OnInit {

  paras: string[] = content.earlylife;
  constructor() { }

  ngOnInit() {
  }

}
