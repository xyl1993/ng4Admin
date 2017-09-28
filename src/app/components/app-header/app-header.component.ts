import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {
  constructor(private router:Router) { 
  }
  // public disabled = false;
  // public status: {isopen: boolean} = {isopen: false};
  //
  // public toggled(open: boolean): void {
  //   console.log('Dropdown is now: ', open);
  // }
  //
  // public toggleDropdown($event: MouseEvent): void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }
  public admin:Object={};
  ngOnInit(): void {
    let _ad = sessionStorage.getItem("admin");
    if(_ad){
      this.admin = JSON.parse(_ad);
    }
  }
  loginOut(){
      window.sessionStorage.clear();
      this.router.navigate(['/pages/login']);
  }
}
