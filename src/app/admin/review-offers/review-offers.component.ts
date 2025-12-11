import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Offer } from '../../dto/Offer';
import { AllOfferResponse } from '../../dto/AllOffersResponse';

@Component({
  selector: 'app-review-offers',
  standalone: false,
  templateUrl: './review-offers.component.html',
  styleUrl: './review-offers.component.scss'
})
export class ReviewOffersComponent {
  constructor(private adminService : AdminService) {}

  offers : Offer [] = [];

  ngOnInit() : void {
    this.loadOffers()
  }

  loadOffers () {
    this.adminService.reviewOffers().subscribe({
      next: (res: AllOfferResponse) => {
        this.offers = res.data;
        console.log("all offers : " , res);
        
      },
      error: (err)=> console.log("Something is wrong! ", err)

    });
  }

  accept(id: string) {
  this.adminService.acceptOffer(id).subscribe({
    next: (res) => {
      console.log("Offer accepted!", res);

      this.offers = this.offers.map(o =>
        o._id === id ? { ...o, status: true } : o
      );
      this.loadOffers()
    },
    error: (err) => console.log("Error accepting offer:", err)
  });
}

reject(id: string) {
  this.adminService.rejectOffer(id).subscribe({
    next: (res) => {
      console.log("Offer rejectred!", res);

      this.offers = this.offers.map(o =>
        o._id === id ? { ...o, status: false } : o
      );

      this.loadOffers();
    },
    error: (err) => console.log("Error rejecting offer:", err)
  });
}

}
