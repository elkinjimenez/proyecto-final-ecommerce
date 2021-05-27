import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';
import { RespClient } from '../Interfaces/resp-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  logueado = false;
  client = {} as Client;
  listAll = [] as Client[];

  constructor(
    private http: HttpClient,
  ) {
    if (sessionStorage.getItem(btoa('client')) || sessionStorage.getItem(btoa('user'))) {
      this.logueado = true;
      this.client = JSON.parse(sessionStorage.getItem(btoa('client'))) as Client;
    } else {
      this.logueado = false;
    }
    this.getList();
  }

  getList() {
    return this.http.get('http://localhost:1337/api/client/list').subscribe(
      data => {
        console.log('List Clients: ', data);
        let resp = data as RespClient;
        if (resp.success == true) {
          this.listAll = resp.data;
        } else {

        }
      }
    )
  }

  auth(body: Client) {
    return this.http.post('http://localhost:1337/api/client/auth', body);
  }

  searchById(id: number) {
    return this.http.get('http://localhost:1337/api/client/byid/' + id);
  }

  create(obj: Client) {
    return this.http.post('http://localhost:1337/api/client/create', obj);
  }

  update(client: Client) {
    return this.http.put('http://localhost:1337/api/client/update/' + client.id, client);
  }
}
