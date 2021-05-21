import { Injectable } from '@angular/core';
import { GridsBreakPoints } from '../full-layout/layout';

import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

export interface Grid {
  mobileQuery: boolean;
  cols: number;
}

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(public breakpointObserver: BreakpointObserver) {

  }

  breakPoints$:Observable<Grid>;

  get layoutChanges() {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((state: BreakpointState) => {
          if (state.matches) {
            if (state.breakpoints[Breakpoints.XSmall]) {
              return GridsBreakPoints.xs;
            }
            if (state.breakpoints[Breakpoints.Small]) {
              return GridsBreakPoints.sm;
            }
            if (state.breakpoints[Breakpoints.Medium]) {
              return GridsBreakPoints.md;
            }
            if (state.breakpoints[Breakpoints.Large]) {
              return GridsBreakPoints.lg;
            }
            if (state.breakpoints[Breakpoints.XLarge]) {
              return GridsBreakPoints.xl;
            }
          }
        }),
        shareReplay(1)
      );
  }
}
