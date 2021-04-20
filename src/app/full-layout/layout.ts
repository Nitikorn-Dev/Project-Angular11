
export interface GridBreakPoints {
  xs:{state:string,mobileQuery:boolean,cols:number};
  sm:{state:string,mobileQuery:boolean,cols:number};
  md:{state:string,mobileQuery:boolean,cols:number};
  lg:{state:string,mobileQuery:boolean,cols:number};
  xl:{state:string,mobileQuery:boolean,cols:number};
}

export const GridsBreakPoints:GridBreakPoints = {
  xs:{state:'XSmall',mobileQuery:true,cols:1},
  sm:{state:'Small',mobileQuery:true,cols:1},
  md:{state:'Medium',mobileQuery:true,cols:2},
  lg:{state:'Large',mobileQuery:false,cols:3},
  xl:{state:'XLarge',mobileQuery:false,cols:4}
}
