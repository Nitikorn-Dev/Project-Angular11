import { Injectable } from '@angular/core';

export interface Menu {
  state:string;
  name:string;
  type:string;
  icon:string;
}

export const MENUITEMES:Menu[] = [
  {state:'home',name:'Home',type:'link',icon:'home'},
  {state:'admin',name:'Admin',type:'link',icon:'account_circle'},
  {state:'shopping1',name:'Shopping I',type:'link',icon:'shopping_cart'},
  {state:'shopping2',name:'shopping II',type:'link',icon:'shopping_bag'},
  {state:'info',name:'Info',type:'link',icon:'info'},

]

@Injectable({
  providedIn:'root'
})
export class MenuItems {

  get getMenuItems():Menu[]{
    return MENUITEMES;
  }

}
