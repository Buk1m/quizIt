import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const users = [
      { name: 'Grzesiu'},
      { name: 'Heniu'},
      { name: 'Bartosz'},
      { name: 'Anal'},
      { name: 'Seks'},
      { name: 'Sledz w smiecianie'},
    ];
    return null;
  }
  constructor() { }
}
