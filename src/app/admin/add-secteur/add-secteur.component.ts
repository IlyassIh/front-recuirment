import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-secteur',
  standalone: false,
  templateUrl: './add-secteur.component.html',
  styleUrl: './add-secteur.component.scss'
})
export class AddSecteurComponent {
  constructor(private adminService: AdminService) { }

  allSecteur: any;
  newSector: string = '';
  backendErrorMessage = '';

  ngOnInit(): void {
    this.loadSectors();
  };

  loadSectors(): void {
    this.adminService.allSecteur().subscribe(res => {
      this.allSecteur = res.secteurs;
      console.log("all sectors : ", this.allSecteur);

    });
  }

  addSector() {
    const validSector = this.newSector.trim();
    this.adminService.addSector({secteur : validSector}).subscribe({
      next: (res) => {
        console.log("Secteur added", res);
        this.loadSectors();
        
      },
      error: (err) => {
        this.backendErrorMessage = err.error.message;
      }
    })
  }

  deleteSector(id : string) {
    this.adminService.deleteSector(id).subscribe(res => {
      console.log("deleted sector succssfully! ", res);
      this.loadSectors();
      
    })
  }
}
