import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Roles } from '../../dto/Roles';
import { GlobalService } from '../../globalService/global.service';
import { RolesResponse } from '../../dto/RolesResponse';

@Component({
  selector: 'app-add-role',
  standalone: false,
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.scss'
})
export class AddRoleComponent {
  constructor(private adminService: AdminService, private allRoles : GlobalService) { }
  roles: Roles[] = [];
  newRole: string = '';


  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() : void {
    this.allRoles.allRoles().subscribe((res : RolesResponse) => {
      this.roles = res.data;
      console.log("All roles: ", this.roles);

    });
  }
  backendErrorMessage : string = '';
  addRole() {
    const roleName = this.newRole.trim();
    this.backendErrorMessage = '';
    this.adminService.addRole({role : roleName}).subscribe({
      next: (res) => {
        console.log("Role added! " ,res);
        this.newRole = '';
        this.loadRoles()
        
      },
      error: (err) => {
        this.backendErrorMessage = err.error.message;
      }
    })
  };

  deleteRole(id: string) {
     if (!confirm("Are you sure you want to delete this role?")) return;
    this.adminService.deleteRole(id).subscribe(res => {
      console.log("role deleted!", res);
      this.loadRoles()
      
    })
  }
}
