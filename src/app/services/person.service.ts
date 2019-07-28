import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/delay';


//import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class PersonService {
  //constructor(private httpClient: HttpClient) {}

  private listPersons: Person[] = [
    {
      id: 1,
      name: 'Tom',
      email: 'thomasm1.maestas@gmail.com',
      phone: 5055087707,
      contactType: 'email',
      acquaintance: '5',
      dateOfBirth: new Date('2020-09-03'),
      isActive: true,
      photoPath: 'assets/images/a.png'
    },
    {
      id: 2,
      name: 'Thomas',
      email: 'thomas@gmail.com',
      phone: 5055087707,
      contactType: 'phone',
      acquaintance: '2',
      dateOfBirth: new Date('1976-09-03'),
      isActive: true,
      photoPath: 'assets/images/d.png'
    },
    {
      id: 3,
      name: 'Milton',
      email: 'milton@gmail.com',
      phone: 5055087707,
      contactType: 'email',
      acquaintance: '3',
      dateOfBirth: new Date('1818-09-03'),
      isActive: false,
      photoPath: 'assets/images/s.png'
    }
  ];

  // getPersons(): Observable<Person[]> {
  //   return this.httpClient.get<Person[]>('http://localhost:3000/persons')
  // }
  //getPersons(): Person[] {
  // return this.listPersons;
  getPersons(): Observable<Person[]> {
    return Observable.of(this.listPersons);
  }
  getPerson(id: number): Person {
    return this.listPersons.find(e => e.id === id)
  }
  save(person: Person) {
    if (person.id === null) {
      const maxId = this.listPersons.reduce(function (p1, p2) {
        return (p1.id > p2.id) ? p1 : p2;
      }).id
      person.id = maxId + 1;
      this.listPersons.push(person);
    } else {
      const foundIdx = this.listPersons.findIndex(p => p.id === person.id);
      this.listPersons[foundIdx] = person;
    }


  }
}