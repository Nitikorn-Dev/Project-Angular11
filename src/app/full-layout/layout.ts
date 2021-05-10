
export interface GridBreakPoints {
  xs:{state:string,mobileQuery:boolean,cols:number,mode:string};
  sm:{state:string,mobileQuery:boolean,cols:number,mode:string};
  md:{state:string,mobileQuery:boolean,cols:number,mode:string};
  lg:{state:string,mobileQuery:boolean,cols:number,mode:string};
  xl:{state:string,mobileQuery:boolean,cols:number,mode:string};
}

export const GridsBreakPoints:GridBreakPoints = {
  xs:{state:'XSmall',mobileQuery:true,cols:1,mode:'over'},
  sm:{state:'Small',mobileQuery:true,cols:1,mode:'over'},
  md:{state:'Medium',mobileQuery:true,cols:2,mode:'over'},
  lg:{state:'Large',mobileQuery:false,cols:3,mode:'side'},
  xl:{state:'XLarge',mobileQuery:false,cols:4,mode:'side'}
}
