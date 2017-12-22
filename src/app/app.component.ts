///<reference path="../../node_modules/mdui/types/mdui.d.ts"/>
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './template/app.component.html',
  styleUrls: [
    'componentcss/app.component.css'
  ]
})
export class AppComponent implements OnInit {

  drawer;
  isshowDrawerMenu = false;

  ngOnInit(): void {
    this.drawer = new mdui.Drawer('#drawer');
  }

  menuclick(): void {
    if (this.isshowDrawerMenu) {
      this.isshowDrawerMenu = false;
      this.drawer.close();
    } else {
      this.isshowDrawerMenu = true;
      this.drawer.open();
    }
  }

  menuliclick(param):void{

  }
}
