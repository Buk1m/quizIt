import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

}
