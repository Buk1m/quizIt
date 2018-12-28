import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: 'paging.component.html',
  styleUrls: ['paging.component.css'],
})
export class PagingComponent {

  @ViewChild('pageInput')
  el: ElementRef;


  @Input() id: string;
  @Input() previousLabel = 'Previous';
  @Input() nextLabel = 'Next';
  @Input() maxSize = 4;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  changePage(paginationApi: any, value: number): void {
    console.log(value);
    paginationApi.setCurrent(value);
    console.log(this.el.nativeElement.value);
  }

}
