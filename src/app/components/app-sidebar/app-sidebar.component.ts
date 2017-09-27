import { Component } from '@angular/core';
import { config } from '../../global/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  public sidebarList:Array<Object> = config.role_fun;
  
  ngOnInit(): void {
    console.log(this.sidebarList);
  }

  
}
