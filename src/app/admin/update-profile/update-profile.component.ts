import { Component, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {
  hide1 = signal(true);
  clickEvent1(event: MouseEvent) {
    this.hide1.set(!this.hide1());
    event.stopPropagation();
  }

  hide2 = signal(true);
  clickEvent2(event: MouseEvent) {
    this.hide2.set(!this.hide2());
    event.stopPropagation();
  }

  hide3 = signal(true);
  clickEvent3(event: MouseEvent) {
    this.hide3.set(!this.hide3());
    event.stopPropagation();
  }
  

  user: any = null;
  profileForm!: FormGroup;
  backEndErrorMessage: string = '';
  backEndField : string = '';

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
  private router :Router) {
    this.user = this.getUser();

    this.profileForm = this.fb.group({
      nom: [this.user.nom, Validators.required],
      prenom: [this.user?.prenom, Validators.required],
      email: [this.user?.email, [Validators.required, Validators.email]],
      oldPassword: [''],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  getUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return jwtDecode(token);
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    this.adminService.updateProfile(this.profileForm.value).subscribe({
      next: res => {
        const updateUser = res.user;
        localStorage.setItem('user', JSON.stringify(updateUser));
        console.log("Profile updated", res);
        alert("Profil mis à jour !");
        this.router.navigate(['admin/dashboard']);
      },
      error: err => {
        console.error(err);
        this.backEndErrorMessage = err.error.message;
        this.backEndField = err.error.field;
      }
    });
  }

}
