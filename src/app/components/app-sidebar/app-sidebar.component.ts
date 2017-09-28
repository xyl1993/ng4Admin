import { Component } from '@angular/core';
import { config } from '../../global/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  public sidebarList:Array<Object>;
  
  ngOnInit(): void {
    let userInfo = JSON.parse(sessionStorage.getItem("admin"));
    let userType = userInfo.userType;
    let sysId = userInfo.id;
    if(userType == 1){
      this.sidebarList = config.role_fun.concat(config.admin_role_fun);
    }else{
      this.sidebarList = config.role_fun; 
    }
    for(let i=0;i<config.custom_master_id.length;i++){
      if(config.custom_master_id[i] == sysId){
        this.sidebarList = this.sidebarList.concat(config.custom_role_fun);
      }
    }
  }

  
}
