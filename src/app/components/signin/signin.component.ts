import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.signinForm.controls; }

  ngOnInit() { }

  loginUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
        return;
    }

    this.authService.signIn(this.signinForm.value)
  }
}