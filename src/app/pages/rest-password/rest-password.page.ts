import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.page.html',
  styleUrls: ['./rest-password.page.scss'],
})
export class RestPasswordPage implements OnInit {
email: any
  constructor(public router: Router, public authService : AutheticationService) { }

  ngOnInit() {
  }
  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>{
      console.log('reset link sent')
    this.router.navigate(['/login'])

    }

     ).catch((error) =>{
      console.log(error);
     })
  }

}
