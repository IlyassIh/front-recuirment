import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private adminService: AdminService) {}

  userCount = 0;
  empCount = 0;
  companyCount = 0;
  offerCount = 0;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.adminService.showUsers().subscribe(res => {
      this.userCount = res.data.length;

      this.adminService.showEmployers().subscribe(res => {
        this.empCount = res.data.length;

        this.adminService.allCompanies().subscribe(res => {
          this.companyCount = res.data.length;

          this.adminService.allOffers().subscribe(res => {
            this.offerCount = res.data.length;

            this.loadCharts();
          });
        });
      });
    });
  }

  loadCharts() {
    new Chart("userChart", {
      type: 'doughnut',
      data: {
        labels: ["Users", "Employers", "Companies", "Offers"],
        datasets: [{
          data: [this.userCount, this.empCount, this.companyCount, this.offerCount],
          backgroundColor: ["#3b82f6", "#ef4444", "yellow", "green"]
        }]
      }
    });

  }
}
