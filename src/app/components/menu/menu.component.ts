import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

   routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'About',
      path: '/about'
    }
  ];

  ngOnInit() {
  }

}
