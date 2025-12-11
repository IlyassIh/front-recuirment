import { Component } from '@angular/core';
import { EmployerService } from '../service/employer.service';
import { Offer } from '../../dto/Offer';
import { AllOfferResponse } from '../../dto/AllOffersResponse';

@Component({
  selector: 'app-my-offers',
  standalone: false,
  templateUrl: './my-offers.component.html',
  styleUrl: './my-offers.component.scss'
})
export class MyOffersComponent {
  constructor(private empService: EmployerService) { }

  offers: Offer[] = [];
  applies: any[] = [];

  ngOnInit(): void {
    this.loadMyOffers();
    this.loadApplies();
  }

  loadMyOffers() {
    this.empService.myOffers().subscribe((res: AllOfferResponse) => {
      this.offers = res.data;
      console.log("All offers:", this.offers);
    });
  }

  loadApplies() {
    this.empService.applies().subscribe(res => {
      this.applies = res.applies; 
      console.log("All applies:", this.applies);
    });
  }

  getAppliesCount(offerId: string): number {
    return this.applies.filter(a => a.offre_id._id === offerId).length;
  }

}
