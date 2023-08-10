import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ITab } from 'src/app/pages/tabs/tab';

@Component({
  selector: 'app-tab03',
  templateUrl: './tab03.component.html',
  styleUrls: ['./tab03.component.scss']
})
export class Tab03Component {
  tabActive: number = 0;
  @ViewChild('tab03List') tab?:ElementRef;
  @Input() tabs: ITab[] = [];
  tabLeft: number = 0;
  tabLeftPx: string = '20px';
  widthPx: string = '60px';

  constructor() { }

  ngOnInit(): void {
    this.tabLeft = 0;
    this.tabLeftPx = '20px';
    this.widthPx = '60px';
  }
  ngDoCheck() {
    if(this.tab) {
      this.changeTabActive(this.tabActive);
    }
  }
  changeTabActive(index: number) {
    this.tabActive = index;
    if(this.tab) {
      let oneItemWidth = (this.tab.nativeElement.offsetWidth - 40 ) / 6;
      this.tabLeft = oneItemWidth * this.tabActive + 20;
      this.tabLeftPx = this.tabLeft + 'px';
      // this.widthPx = '60px';
      this.widthPx = oneItemWidth + 'px';
    }
  }
}
