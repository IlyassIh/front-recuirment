import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { User } from '../../dto/User';
import { AllUsersResponse } from '../../dto/AllUsersResponse';
import { UserResponse } from '../../dto/UserResponse';

@Component({
  selector: 'app-all-users',
  standalone: false,
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {
  constructor(private adminService: AdminService) { }

  users: UserResponse[] = [];

  ngOnInit() {
    this.adminService.showUsers().subscribe({
      next: (res: AllUsersResponse) => {
        this.users = res.data;
        console.log("all users", this.users);
      },
      error: (err) => {
        console.log("Something is wrong :", err);
      }
    });
  }


}
