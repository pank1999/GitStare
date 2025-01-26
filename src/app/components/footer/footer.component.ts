import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/pank1999',
      icon: 'fab fa-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pankaj-kumar-pandey/',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Pankajp56829682',
      icon: 'fab fa-twitter',
    },
  ];
}
