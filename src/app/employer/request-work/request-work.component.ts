import { Component } from '@angular/core';
import { EmployerService } from '../service/employer.service';
import { Offer } from '../../dto/Offer';
import { AllOfferResponse } from '../../dto/AllOffersResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-work',
  standalone: false,
  templateUrl: './request-work.component.html',
  styleUrl: './request-work.component.scss'
})
export class RequestWorkComponent {
  constructor(private empService: EmployerService, private route: ActivatedRoute) { }

  viewOfferData!: Offer;
  applies: any[] = [];



  ngOnInit(): void {

    const offerId = this.route.snapshot.paramMap.get('id');
    if (offerId) {
      this.loadOffer(offerId);
      this.loadApplies(offerId);
    }

  }


  loadOffer(offerId: string) {
    this.empService.viewOffer(offerId).subscribe({
      next: (res) => {
        this.viewOfferData = res.data;
        console.log("Offer details:", this.viewOfferData);
      },
      error: (err) => console.error(err)
    });
  }


  loadApplies(offerId: string) {
  this.empService.applies().subscribe({
    next: (res) => {
      this.applies = res.applies.filter(( a: any) => a.offre_id._id === offerId);
      console.log("Filtered applies:", this.applies);
    },
    error: (err) => console.error(err)
  });
}
}
