import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreakpointService } from '../serviced/breakpoin.service';

import { map,switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';


export interface Grid{
  mobileQuery:boolean;
  cols:number;
}



@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html",
  styleUrls: ["./full-layout.component.scss"]
})
export class FullLayoutComponent implements OnInit, OnDestroy {

  breakPoints$:Observable<any>;

  mobileQuery:boolean;

  isSidenav:boolean;

  constructor(public breakpoinService:BreakpointService){
    this.breakpoinService.layoutChanges.subscribe(res=>{console.log(res); this.mobileQuery = res.mobileQuery})
    this.breakPoints$ = this.breakpoinService.layoutChanges;

  }

  snvOpen(){
    this.isSidenav = true;
  }

  snvClose(){
    this.isSidenav = false;
  }

  ngOnInit() {

   }

   ngOnDestroy() {

   }


   fillerContent = Array.from({length: 50}, () =>
   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  }
