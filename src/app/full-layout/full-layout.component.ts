import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

import { Subject,BehaviorSubject,ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";

export interface GridBreakpoint {
  xl: { mobileQuery: boolean; cols: number };
  lg: { mobileQuery: boolean; cols: number };
  md: { mobileQuery: boolean; cols: number };
  sm: { mobileQuery: boolean; cols: number };
  xs: { mobileQuery: boolean; cols: number };
}
export interface Grid{
  mobileQuery:boolean;
  cols:number;
}

@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html",
  styleUrls: ["./full-layout.component.css"]
})
export class FullLayoutComponent implements OnInit {

  breakpoints$ = new ReplaySubject<Grid>(1)


  grid:any;

  constructor(private breakpointObserver: BreakpointObserver) {
   this.grid = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(
        map(result => {
          if (result.matches) {
            if(result.breakpoints[Breakpoints.XSmall]){
              
              this.breakpoints$.next({mobileQuery:false,cols:5})
            }

          }

        })
      );
  }

  ngOnInit() {
    this.breakpoints$.subscribe(console.log)
   }
}
