import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-invoice',
  templateUrl: './modal-invoice.component.html',
  styleUrls: ['./modal-invoice.component.css']
})
export class ModalInvoiceComponent implements OnInit {

  displayedColumns: string[] = ['product', 'amount', 'price', 'finally'];

  total = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Data: ', data);
    data.listAll.forEach(x => {
      this.total += x.product.price * x.amount
    });
  }

  ngOnInit(): void {
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.location.reload();
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}