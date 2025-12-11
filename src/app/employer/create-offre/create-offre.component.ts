import { Component } from '@angular/core';
import { AdminService } from '../../admin/service/admin.service';
import { EmployerService } from '../service/employer.service';
import { Company } from '../../dto/Company';
import { CompanyResponse } from '../../dto/CompanyResponse';
import { RolesResponse } from '../../dto/RolesResponse';
import { Roles } from '../../dto/Roles';
import { GlobalService } from '../../globalService/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offre',
  standalone: false,
  templateUrl: './create-offre.component.html',
  styleUrl: './create-offre.component.scss'
})
export class CreateOffreComponent {
  constructor(private adminService: AdminService, private empService: EmployerService, private allRoles: GlobalService, private fb : FormBuilder, private router : Router) { }

  offer !:FormGroup;
  allCompanies: Company[] = [];
  roles: Roles[] = [];
  allSecteur: any;
  allContract: any;

  ngOnInit(): void {
    this.offer = this.fb.group({
      offre: ['', Validators.required],
      desc: ['', Validators.required],
      salaire: ['', Validators.required],
      secteur_id: ['', Validators.required],
      contrat: ['', Validators.required],
      company_id: ['', Validators.required],
    })
    this.loadCompanies();
    this.loadRoles();
    this.loadSectors();
    this.loadContract();
  }

  loadCompanies() {
    this.empService.companiesUser().subscribe((res: CompanyResponse) => {
      this.allCompanies = res.data;
      console.log("All companies : ", this.allCompanies);

    })
  }

  loadRoles(): void {
    this.allRoles.allRoles().subscribe((res: RolesResponse) => {
      this.roles = res.data;
      console.log("All roles: ", this.roles);

    });
  }

  loadSectors(): void {
    this.adminService.allSecteur().subscribe(res => {
      this.allSecteur = res.secteurs;
      console.log("all sectors : ", this.allSecteur);

    });
  }

  loadContract() : void {
    this.adminService.allContract().subscribe(res => {
      this.allContract = res.contrats;
      console.log("all contract : ", this.allContract);
      
    });
  }

  createOffer() {
    if(this.offer.invalid) return;
    this.empService.createOffer(this.offer.value).subscribe({
      next: (res) => {
        console.log("offer created successfully! ", res);
        alert("offer created successfully! ");
        this.router.navigate(['employer/myOffers'])
        
      },
      error: (err) => {
        console.log("Something is wrong : ", err);

        
      }
    })
  }
}
