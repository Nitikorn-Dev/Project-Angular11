import { Component, OnInit, OnDestroy,AfterViewInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { MatSidenavContainer } from '@angular/material/sidenav';
import { BreakpointService } from '../serviced/breakpoin.service';

import { map,switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { onMainContentChange, onToolbarChange } from './animation';


export interface Grid{
  mobileQuery:boolean;
  cols:number;
}



@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html",
  styleUrls: ["./full-layout.component.scss"],
  animations:[onMainContentChange,onToolbarChange]
})
export class FullLayoutComponent implements OnInit, OnDestroy,AfterViewInit {
  @ViewChild(MatSidenavContainer) public container:MatSidenavContainer;

  breakPoints$:Observable<any>;

  mobileQuery:boolean;

  public SideNavChange: boolean;
  public sidenavMode:string;
  public toolbarMode:string;
  mode:string;

  constructor(public breakpoinService:BreakpointService){
    this.breakpoinService.layoutChanges.subscribe(res=>{console.log(res);
    this.mobileQuery = res.mobileQuery
    this.mode = res.mode;
    if(!res.mobileQuery){
      this.sidenavMode = 'open';
      this.toolbarMode = 'open';
    }else{
      this.toolbarMode = 'default';
    }
  })
    this.breakPoints$ = this.breakpoinService.layoutChanges;

  }

  ngAfterViewInit(){}



  ngOnInit() {

   }

   ngOnDestroy() {

   }


   onSideNavChange(result){
     console.log('changed sidebar',result);
    this.sidenavMode = result;
    this.toolbarMode = result;

   }






   fillerContent = Array.from({length: 50}, () =>
   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  }
