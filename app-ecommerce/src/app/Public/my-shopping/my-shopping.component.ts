import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Interfaces/client';
import { ClientService } from 'src/app/Services/client.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.component.html',
  styleUrls: ['./my-shopping.component.css']
})
export class MyShoppingComponent implements OnInit {

  listAll= [];

  constructor(
    public _myService: SaleService,
    public _client: ClientService,
  ) { }

  ngOnInit(): void {
    this.listado();
  }

  listado() {
    if (this._myService.listAll.length > 0) {
      let listado = [];
      this._myService.listAll.forEach(x=> {
        if(x.client){
          if((x.client as Client).id == this._client.client.id){
            listado.push(x);
          }
        }
      })
     this.listAll = listado;
    } else {
      setTimeout(() => {
        this.listado();
      }, 200);
    }
  }

}
