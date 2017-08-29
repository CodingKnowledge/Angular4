import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  email: string;
  password: string;
  displatName: string;
  errorMsg: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){

  }
}
