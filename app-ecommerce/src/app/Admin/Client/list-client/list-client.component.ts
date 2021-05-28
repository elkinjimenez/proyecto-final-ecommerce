import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/person';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(
    public _myService: ClientService,
  ) {
    _myService.getList();
  }

  ngOnInit(): void {
  }

  remove(id: number) {
    let obj = this._myService.listAll.find(x => x.id == id);
    obj.state = !obj.state;
    let person = obj.person;
    obj.person = (obj.person as Person).id;
    this._myService.update(obj).subscribe(
      data => {
        console.log('Update obj: ', data);
        obj.person = person;
      }
    )
  }

}
