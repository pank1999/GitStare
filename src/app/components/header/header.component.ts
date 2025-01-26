import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigateToGithub() {
    window.open('https://github.com/pank1999', '_blank');
  }

  navigateToLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/pankaj-pandey-b86363170/',
      '_blank'
    );
  }
}
