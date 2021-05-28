import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/Interfaces/person';
import { Client } from 'src/app/Interfaces/client';
import { ClientService } from 'src/app/Services/client.service';
import { PersonService } from 'src/app/Services/person.service';
import { UtilService } from 'src/app/Services/util.service';
import { ModalLoginComponent } from 'src/app/Public/modal-login/modal-login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  rFormsObj: FormGroup;
  idObj: number;
  objClient = {} as Client;
  objPerson = {} as Person;

  constructor(
    private fb: FormBuilder,
    public _myService: ClientService,
    public _person: PersonService,
    private route: ActivatedRoute,
    private ro: Router,
    public util: UtilService,
    public dialog: MatDialog,
  ) {
    this.idObj = this.route.snapshot.params.id;
    this.rFormsObj = fb.group({
      'name': ['', Validators.required],
      'lastname': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'address': ['', Validators.required],
      'city': ['', Validators.required],
      'user': ['', Validators.required],
      'password': ['', Validators.required],
      'gender': ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.searchObj();
  }

  searchObj() {
    if (this._myService.listAll.length > 0) {
      let cat = this._myService.listAll.find(x => x.id == this.idObj);
      if (cat) {
        this.objClient = cat;
        this.objPerson = cat.person;
        this.rFormsObj.patchValue(
          {
            'gender': cat.gender,
            'name': cat.person.name,
            'lastname': cat.person.lastname,
            'email': cat.person.email,
            'phone': cat.person.phone,
            'address': cat.person.address,
            'city': cat.person.city,
            'user': cat.user,
          }
        )
      }
    } else {
      setTimeout(() => {
        this.searchObj();
      }, 500);
    }
  };

  crear() {
    this.objPerson = {
      address: this.rFormsObj.controls['address'].value,
      city: this.rFormsObj.controls['city'].value,
      phone: this.rFormsObj.controls['phone'].value,
      email: this.rFormsObj.controls['email'].value,
      name: this.rFormsObj.controls['name'].value,
      lastname: this.rFormsObj.controls['lastname'].value,
    }
    this._person.create(this.objPerson).subscribe(
      personD => {
        console.log('Person create: ', personD);
        let resp = personD as any;
        if (resp.success) {
          this.objClient = {
            person: resp.data.id,
            gender: this.rFormsObj.controls['gender'].value,
            user: this.rFormsObj.controls['user'].value,
            password: this.rFormsObj.controls['password'].value,
            state: true,
          }
          this._myService.create(this.objClient).subscribe(
            clientD => {
              console.log('Client create: ', clientD);
              if ((clientD as any).success == true) {
                if(this.util.private){
                  this.ro.navigate(['/dashboard/client/list']);
                }else{
                  this.ro.navigate(['/']);
                  this.login();
                }
              }
            }
          )
        }
      }
    )
  }

  login() {
    const dialogRef = this.dialog.open(ModalLoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  update() {
    let id = this.objPerson.id;
    this.objPerson = {
      id: id,
      address: this.rFormsObj.controls['address'].value,
      city: this.rFormsObj.controls['city'].value,
      phone: this.rFormsObj.controls['phone'].value,
      email: this.rFormsObj.controls['email'].value,
      name: this.rFormsObj.controls['name'].value,
      lastname: this.rFormsObj.controls['lastname'].value,
    }
    this._person.update(this.objPerson).subscribe(
      personD => {
        console.log('Person create: ', personD);
        let resp = personD as any;
        if (resp.success) {
          let id = this.objClient.id;
          this.objClient = {
            id: id,
            person: this.objPerson.id,
            gender: this.rFormsObj.controls['gender'].value,
            user: this.rFormsObj.controls['user'].value,
            password: this.rFormsObj.controls['password'].value,
            state: true,
          }
          this._myService.update(this.objClient).subscribe(
            clientD => {
              console.log('Client create: ', clientD);
              if ((clientD as any).success == true) {
                this.ro.navigate(['/dashboard/client/list']);
              }
            }
          )
        }

      }
    )
  }

}
