import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private router:Router) { 
  }
  ngOnInit(): void {
    if(!sessionStorage.getItem("token")){
      this.router.navigate(['/pages/login']);
    }
  }
  
}
