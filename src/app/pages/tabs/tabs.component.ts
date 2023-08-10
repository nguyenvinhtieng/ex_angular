import { Component } from '@angular/core';
import { ITab, tabs } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabList: ITab [] = tabs;
}
