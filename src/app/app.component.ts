import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeaderAndFooter = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('URL após redirecionamento:', event.urlAfterRedirects);
        this.showHeaderAndFooter = !['/login', '/registro', '/cadastrados'].includes(event.urlAfterRedirects);
      }
    });
  }
}
