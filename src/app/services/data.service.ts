import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockDatainterface } from '../pages/posts/posts.component';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
