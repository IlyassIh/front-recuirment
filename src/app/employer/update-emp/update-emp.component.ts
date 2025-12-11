import { Component, signal } from '@angular/core';
import { AdminService } from '../../admin/service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-update-emp',
  standalone: false,
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.scss'
})
export class UpdateEmpComponent {
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
  backEndField: string = '';

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit(): void {
    this.userUpdate()
  }

  userUpdate() {
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
        this.userUpdate()
        this.router.navigate(['employer/createCompany']);
      },
      error: err => {
        console.error(err);
        this.backEndErrorMessage = err.error.message;
        this.backEndField = err.error.field;
      }
    });
  }
}
