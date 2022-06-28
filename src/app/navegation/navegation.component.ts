import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onLoginClick(){
    const  URL="https://global-manu-man.auth.us-east-2.amazoncognito.com/login?client_id=3tpina37tv6a7343kqk7u19edg&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://global-manuh-sandoval.com/";
    window.location.assign(URL);
  }

}
