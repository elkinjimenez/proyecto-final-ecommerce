import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ClientService } from 'src/app/Services/client.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrls: ['./landing-pages.component.css']
})
export class LandingPagesComponent implements OnInit {

  constructor(
    public _myCart: CartService,
    public dialog: MatDialog,
    public _client: ClientService,
    private ro: Router,
  ) { }

  ngOnInit(): void { }

  login() {
    const dialogRef = this.dialog.open(ModalLoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout() {
    sessionStorage.clear();
    this.ro.navigate(['/products']);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  }

}
