import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ro: Router,
    public util: UtilService,
  ) {
    if (!sessionStorage.getItem(btoa('user'))) {
      this.ro.navigate(['/']);
      util.private = false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.ro.navigate(['/']);
    this.util.private = false;
    setTimeout(() => {
      window.location.reload();
    }, 600);
  }

}
