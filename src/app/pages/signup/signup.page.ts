import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  regForm : FormGroup ;
  constructor(public formBuilder : FormBuilder,public loadingCtrl:LoadingController , public authService: AutheticationService,public router: Router) { }

  ngOnInit() {
    this.regForm=this.formBuilder.group({
      fullname:['',[Validators.required]],
      email : ["",[
    Validators.required,
  Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],

  password : ["",[
    Validators.required,
  Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
    })
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.resgisterUser(this.regForm.value.email,this.regForm.value.password).catch((error) =>{
        console.log(error);
        loading.dismiss()
      })
      if(user){
        loading.dismiss()
        this.router.navigate(['/login'])
        
      }
      else{
        console.log('provide correct values')
      }
    }
  }
}