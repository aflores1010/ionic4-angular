import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockDatainterface } from '../pages/posts/posts.component';
import { Observable } from '../../../node_modules/rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap( (posts) => {
          console.log(posts);
        })
    );
  }
}
