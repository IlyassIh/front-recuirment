import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { UserResponse } from '../../dto/UserResponse';
import { ApiResponse } from '../../dto/ApiResponse';
import { AllUsersResponse } from '../../dto/AllUsersResponse';

@Component({
  selector: 'app-all-emp',
  standalone: false,
  templateUrl: './all-emp.component.html',
  styleUrl: './all-emp.component.scss'
})
export class AllEmpComponent {
  constructor(private adminService: AdminService) { }

  employers: UserResponse[] = [];

  ngOnInit(): void {
    this.adminService.showEmployers().subscribe({
      next: (res: AllUsersResponse) => {
        this.employers = res.data;
        console.log("All employers : ", this.employers);

      },
      error: (err) => {
        console.log("Something is wrong : ", err);

      }
    })
  }
}
