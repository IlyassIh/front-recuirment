import { Component } from '@angular/core';
import { CondidaService } from '../service/condida.service';
import { AllOfferResponse } from '../../dto/AllOffersResponse';
import { Offer } from '../../dto/Offer';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home-condida',
  standalone: false,
  templateUrl: './home-condida.component.html',
  styleUrl: './home-condida.component.scss'
})
export class HomeCondidaComponent {
  constructor(private condiaService: CondidaService) { }

  allOffers: Offer[] = [];
  selectedOffer: Offer | null = null;
  backEndError: string = '';
  backEndField: string = '';

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers() {
    this.condiaService.allOffers().subscribe((res: AllOfferResponse) => {
      this.allOffers = res.data;

      if (this.allOffers.length > 0) {
        this.selectedOffer = this.allOffers[0];
      }
    });
  }

  selectOffer(offer: Offer) {
    this.selectedOffer = offer;
    this.backEndError = '';
    this.backEndField = '';
  }

  getUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decoded: any = jwtDecode(token);

    return decoded.id;
  }

  applyOffer() {
    if (!this.selectedOffer) return;

    const userId = this.getUser();

    const data =
    {
      user_id: userId,
      offre_id: this.selectedOffer._id
    }


    this.condiaService.apply(data).subscribe({
      next: (res) => {
        console.log("Offer applied", res);
        alert("Application sent");

      },
      error: (err) => {
        console.log("Something is wrong! ", err);
        this.backEndError = err.error.message,
          this.backEndField = err.error.field

      }
    })
  }

}
