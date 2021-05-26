import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
  ) { }

  auth(body: Client) {
    return this.http.post('http://localhost:1337/api/client/auth', body);
  }
}
