import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/Services/cart.service';
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
  ) { }

  ngOnInit(): void {
  }

  login(){
    const dialogRef = this.dialog.open(ModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
