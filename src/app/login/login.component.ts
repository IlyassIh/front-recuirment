import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/service/admin.service';
import { User } from '../dto/User';
import { LoginResponse } from '../dto/LoginResponse';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  emailError = signal('Email required');
  passwordError = signal('Password required');
  backendError: string = '';

  constructor(private fb: FormBuilder, private adminService: AdminService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  updateEmailError() {
    const email = this.loginForm.get('email');

    if (email?.hasError('required')) {
      this.emailError.set('You must enter an email');
    } else if (email?.hasError('email')) {
      this.emailError.set('Not a valid email');
    } else {
      this.emailError.set('');
    }
  }

  updatePasswordError() {
    const pass = this.loginForm.get('password');

    if (pass?.hasError('required')) {
      this.passwordError.set('Password is required');
    } else if (pass?.hasError('minlength')) {
      this.passwordError.set('Password must be at least 8 characters');
    } else {
      this.passwordError.set('');
    }
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() {
  if (this.loginForm.invalid) return;

  this.adminService.login({ ...this.loginForm.value }).subscribe({
    next: (res: LoginResponse) => {

      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.payload));

      const role = res.payload.role?.toLowerCase();

      console.log("Login successfully, role:", role);

      if (role === 'admin') {
        this.route.navigate(['admin/dashboard']);
      } 
      else if (role === 'condidature') {
        this.route.navigate(['condida/home']);
      }
      else if (role === 'employeur') {
        this.route.navigate(['employer/createCompany']);
      }
      else {
        this.route.navigate(['/']);
      }
    },

    error: (err) => {
      console.log("Something is wrong : ", err);
      this.backendError = err.error.message || 'Something is wrong while login!';
    }
  })
}

}