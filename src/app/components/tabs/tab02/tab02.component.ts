import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ITab } from 'src/app/pages/tabs/tab';

@Component({
  selector: 'app-tab02',
  templateUrl: './tab02.component.html',
  styleUrls: ['./tab02.component.scss']
})
export class Tab02Component {
  tabActive: number = 0;
  @ViewChild('tab02List') tab?:ElementRef;
  @Input() tabs: ITab[] = [];
  resizeObservable$?: Observable<Event>;
  resizeSubscription$?: Subscription;
  tabLeft: number = 0;
  tabLeftPx: string = '20px';
  widthPx: string = '60px';
  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.changeTabActive(this.tabActive);
    })
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
      this.widthPx = oneItemWidth + 'px';
    }
  }
}
