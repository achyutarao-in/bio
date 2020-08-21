import { Component, OnInit } from '@angular/core';
import * as content from '../../content/landing/family.json';

interface IContent {
  title: string;
  sections: ({image: string; text: string})[];
}

@Component({
  selector: 'app-family-friends',
  templateUrl: './family-friends.component.html',
  styleUrls: ['./family-friends.component.scss']
})
export class FamilyFriendsComponent implements OnInit {

  content: IContent = (content as any).default;
  constructor() { }

  ngOnInit() {
  }

}
