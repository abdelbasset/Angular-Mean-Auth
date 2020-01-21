import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  isLoading = false;
  private loadingSubs: Subscription;
  

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private uiService: UIService
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.signinForm.controls; }

  ngOnInit() { 
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    })

  }

  loginUser() {
    this.submitted = true;
    this.isLoading = true;
    // stop here if form is invalid
    if (this.signinForm.invalid) {
      this.isLoading = false;
        return;
    }

    this.authService.signIn(this.signinForm.value);
  }
}