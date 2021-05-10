import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
    this.sidenav.openedStart.subscribe(()=>{

      this.isOpen = true;
      this.isFocusIn = true;

    })


  }

  @Output() onSideNavChange:EventEmitter<any> = new EventEmitter();
  @Input() sidenav:MatSidenav;
  @Input() mobileQuery:boolean;
  private isOpen = true;
  private isFocusIn = true;
  private isMouseIn = true;

  public get opened(): boolean {
    return this.isOpen;
  }
  public get FocusIn(): boolean {
    return this.isFocusIn;
  }


  onClick(): void {
    this.isFocusIn = !this.isFocusIn;
    this.isOpen = true;
    if (!this.isMouseIn) {
      this.isOpen = false;
    }
    if(this.mobileQuery){
    // this.onSideNavChange.emit(null);
    }else{
      this.onSideNavChange.emit(this.isFocusIn?'open':'close');
    }
  }

  public onMouseEnter(): void {
    this.isMouseIn = true;
    this.isOpen = true;
  }

  public onMouseLeave(): void {
    this.isMouseIn = false;
    if (!this.isFocusIn) {
      this.isOpen = false;
    }
  }



}
