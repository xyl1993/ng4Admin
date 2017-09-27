import { Component,Input,OnInit  } from '@angular/core';
// 1. 引入forms中的组件
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { NgIf } from '@angular/common';
declare var jQuery:any;  //定义jquery
import { config } from '../../global/config';
import MD5 from 'md5-es';
// 2. 引入ng2-validation中的组件
import {CustomValidators} from 'ng2-validation';
import { validateMobile } from '../../validators/mobile.validator';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'login.component.html',
  providers: [LoginService],
})

export class LoginComponent {
  loginer = {phone: '', password: ''};
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'phone': new FormControl(this.loginer.phone, [
        Validators.required,
        validateMobile
      ]),
      'password': new FormControl(this.loginer.password,[
        Validators.required
      ]),
    });
  }
  get phone() { return this.loginForm.get('phone'); }
  
  get password() { return this.loginForm.get('password'); }

  constructor(public loginService: LoginService,
      private router:Router
    ) { 
  }
  /**
   * form对象
   * @param value form对象 
   * @param valid 验证状态
   */
  public doLogin(value,valid){
    if(valid){
      let param = '?phone='+value.phone+'&password='+MD5.hash(value.password);
      this.loginService.login(param).then((res)=>{
        if(res.code === 200){
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("admin", JSON.stringify(res.data));
          this.router.navigate(['/dashboard']);
        }else{
          alert(res.message);
        }
      })
    }
  }
}
