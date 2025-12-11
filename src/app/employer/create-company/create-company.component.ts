import { Component } from '@angular/core';
import { EmployerService } from '../service/employer.service';
import { CompanyResponse } from '../../dto/CompanyResponse';
import { Company } from '../../dto/Company';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-create-company',
  standalone: false,
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss'
})
export class CreateCompanyComponent {
  constructor(private empService: EmployerService) { }

  allCompanies: Company[] = [];
  company: Company = {
    company: ''
  };
  backendError: string = '';

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.empService.companiesUser().subscribe((res: CompanyResponse) => {
      this.allCompanies = res.data;
      console.log("All companies : ", this.allCompanies);

    })
  }

  createCompany() {
    this.empService.createCompany(this.company).subscribe({
      next: (res) => {
        console.log("Company created successfully", res);
        alert("Company created successfully");
        this.loadCompanies();

      },
      error: (err) => {
        console.log("Something is wrong! ", err)
        this.backendError = err.error.message;
      
      } 
        

    })
  }
}
