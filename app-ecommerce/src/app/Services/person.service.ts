import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Interface/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient,
  ) { }

  // searchById(id: number) {
  //   return this.http.get('http://localhost:1337/api/person/byid/' + id);
  // }

  update(client: Person) {
    return this.http.put('http://localhost:1337/api/person/update/' + client.id, client);
  }

  create(category: Person) {
    return this.http.post('http://localhost:1337/api/person/create', category);
  }

}
