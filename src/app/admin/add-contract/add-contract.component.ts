import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-contract',
  standalone: false,
  templateUrl: './add-contract.component.html',
  styleUrl: './add-contract.component.scss'
})
export class AddContractComponent {
  constructor (private adminService : AdminService) {} 

  allContract: any;
  newContract : string = '';
  backendErrorMessage : string = '';

  ngOnInit () : void {
    this.loadContract();
  }

  loadContract() : void {
    this.adminService.allContract().subscribe(res => {
      this.allContract = res.contrats;
      console.log("all contract : ", this.allContract);
      
    });
  }

  addContract() {
    const validContract = this.newContract.trim();
    this.adminService.addContract({typeContrat : validContract}).subscribe({
      next: (res) => {
        console.log("Contrat added!");
        this.newContract = '';
        this.loadContract();
      },
      error: (err) => {
        this.backendErrorMessage = err.error.message;
      }
    })
  };

  deleteContract(id: string) {
    this.adminService.deleteContract(id).subscribe(res => {
      console.log("deleted contract");
      this.loadContract();
    })
  }
}
