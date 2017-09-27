import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

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
}
