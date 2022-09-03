import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
  
})
export class LoginComponent implements OnInit {
  username = 'ADMIN'
  password = 'ADMIN'
  
  handleLogin(){
    console.log(this.username);

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false
  } else {
  this.invalidLogin = true
  
  }
// Redirect to Welcome Page

this.router.navigate(['welcome',this.username])

    
    }

    constructor(private router:Router,
      private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
    

  ngOnInit(): void {
  }
  
  errorMessage = 'Invalid Credentials'
         invalidLogin = false
         
  

}
