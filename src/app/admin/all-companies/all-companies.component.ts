import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Company } from '../../dto/Company';
import { CompanyResponse } from '../../dto/CompanyResponse';

@Component({
  selector: 'app-all-companies',
  standalone: false,
  templateUrl: './all-companies.component.html',
  styleUrl: './all-companies.component.scss'
})
export class AllCompaniesComponent {
  constructor (private adminService : AdminService) {}

  companies : Company [] = [];

  ngOnInit () : void {
    this.adminService.allCompanies().subscribe({
      next: (res : CompanyResponse) => {
        this.companies = res.data;
        console.log("All Companies : " , res);
        
      },
      error : (err) => {
        console.log("Something is wrong! ", err);
        
      }
    })
  }
}
