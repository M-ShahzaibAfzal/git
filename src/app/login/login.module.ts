import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component'; // Correct path
import { SignUpComponent } from './sign-up/sign-up.component'; // Correct path

@NgModule({
  declarations: [
    LoginFormComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is included here
    RouterModule
  ]
})
export class LoginModule { }


