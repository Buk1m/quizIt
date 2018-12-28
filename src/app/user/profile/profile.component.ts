import {Component, OnInit} from '@angular/core';
import {appear} from '../../animations';
import {AuthenticationService, UserDetails} from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [appear]
})
export class ProfileComponent implements OnInit {

  userDetails: UserDetails;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.auth.profile().subscribe(details => {
      this.userDetails = details;
    }, (err) => {
      // TODO: better error handling
      console.error(err);
    });
  }
}
