import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../globalService/global.service';
import { Roles } from '../dto/Roles';
import { RolesResponse } from '../dto/RolesResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  // Messages d'erreur
  // nomError = signal('First name required');
  // prenomError = signal('Last name required');
  // emailError = signal('Email name required');
  // passwordError = signal('Password required');
  // confirmPasswordError = signal('Confirm Password required');
  // roleError = signal('Role required');

  hide = signal(true);
  hideSecond = signal(true);
  roles : Roles[] = [];
  backendMessage : string = '';
  backendField : string = '';
  submited = false;

  constructor(private fb: FormBuilder, private registerUser : GlobalService, private router : Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', [Validators.required]],
    });

    this.registerUser.allRoles().subscribe({
  next: (res: RolesResponse) => {
    
    this.roles = res.data.filter(role => role.role.toLowerCase() !== 'admin');
    console.log("all roles: ", this.roles);
  },
  error: (err) => console.log("Something is wrong: ", err)
});
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  clickEventSecond(event: MouseEvent) {
    this.hideSecond.set(!this.hideSecond());
    event.stopPropagation();
  }

  register () {
    this.submited = true
    if (this.registerForm.invalid) return;
    this.registerUser.register({...this.registerForm.value}).subscribe({
      next: (res) => {
        console.log("User have been registred", res);

        this.router.navigate(['/login'])
      },

      error: (err) => {
        console.log("Something is wrong! ", err);
        this.backendMessage = err.error.message;
        this.backendField = err.error.field
      }
    })
  }


}
