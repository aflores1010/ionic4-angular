import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mockPosts;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.mockPosts = this.dataService.getPosts();

    // this.dataService.getPosts().subscribe(res => {
    //   this.mockPosts = res;
    //   console.log(this.mockPosts);
    // });
  }

  postListener( id) {
    console.log('Click en ', id);
  }

}

export interface MockDatainterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}
