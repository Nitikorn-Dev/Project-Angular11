import { Component, OnInit } from '@angular/core';
import { MenuItems,Menu } from '../../serviced/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems:Menu[];

  constructor(public menuitems:MenuItems) {
    this.menuItems = this.menuitems.getMenuItems;
  }

  ngOnInit() {
  }



}
