import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'authin',
  templateUrl: './authin.component.html',
  styleUrls: ['./authin.component.css'],
})
export class Authin implements OnInit {
  constructor(private router: Router,private authSerivce:AuthService) {
    // ...
  }

  ngOnInit(): void {}

  navigate(links: any[]) {
    this.router.navigate(links);
  }

  loginInWithGoogle(){
    this.authSerivce.GoogleAuth();
  }

  loginInWithGithub(){
    this.authSerivce.GithubLogin();
  }

  loginWithFacebook(){
    this.authSerivce.FacebookLogin();
  }
}
