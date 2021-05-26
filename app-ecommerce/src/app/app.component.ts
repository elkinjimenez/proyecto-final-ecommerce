import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from './Services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-ecommerce';

  constructor(
    private ro: Router,
    public util: UtilService,
  ) {
    this.util.private = location.pathname.indexOf('dashboard') > 0 ? true : false;
  }
}
