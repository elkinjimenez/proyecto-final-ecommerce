import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private = false;

  title = 'app-ecommerce';

  constructor(
    private ro: Router,
  ) {
    this.private = location.pathname.indexOf('dashboard') > 0 ? true : false;
  }
}
