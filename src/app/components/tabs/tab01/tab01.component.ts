import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ITab } from 'src/app/pages/tabs/tab';

@Component({
  selector: 'app-tab01',
  templateUrl: './tab01.component.html',
  styleUrls: ['./tab01.component.scss']
})
export class Tab01Component {
  tabActive: number = 0;
  @ViewChild('tab01List') tab?:ElementRef;
  @Input() tabs: ITab[] = [];
  resizeObservable$?: Observable<Event>;
  resizeSubscription$?: Subscription;
  tabLeft: number = 0;
  tabLeftPx: string = '20px';

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

  ngOnDestroy() {
    if(this.resizeSubscription$) {
      this.resizeSubscription$.unsubscribe();
    }
  }

  changeTabActive(index: number) {
    this.tabActive = index;
    if(this.tab) {
      let oneItemWidth = (this.tab.nativeElement.offsetWidth - 40 ) / 6;
      this.tabLeft = oneItemWidth * this.tabActive + 20;
      this.tabLeftPx = this.tabLeft + 'px';
    }
  }
}
