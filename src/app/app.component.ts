import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mobileSize = 992;
  innerWidth: number;
  mobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.mobile = this.innerWidth <= this.mobileSize;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.mobile = this.innerWidth <= this.mobileSize;
  }


}
