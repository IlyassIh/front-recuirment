import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Offer } from '../../dto/Offer';
import { AllOfferResponse } from '../../dto/AllOffersResponse';

@Component({
  selector: 'app-all-offers',
  standalone: false,
  templateUrl: './all-offers.component.html',
  styleUrl: './all-offers.component.scss'
})
export class AllOffersComponent {
  constructor (private adminService: AdminService) {}

  allOffers : Offer [] = [];

  ngOnInit() : void {
    this.adminService.allOffers().subscribe({
      next: (res : AllOfferResponse) => {
        this.allOffers = res.data;
        console.log("All offers accepted: ", this.allOffers);
        
      },
      error: (err) => console.log("Something is wrong! ", err)
      
    })
  }
}
