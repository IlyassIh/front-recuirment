import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms/terms.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllCompaniesComponent } from './admin/all-companies/all-companies.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { loginInterceptor } from './login.interceptor';
import { AllEmpComponent } from './admin/all-emp/all-emp.component';
import { AllOffersComponent } from './admin/all-offers/all-offers.component';
import { ReviewOffersComponent } from './admin/review-offers/review-offers.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddSecteurComponent } from './admin/add-secteur/add-secteur.component';
import { AddContractComponent } from './admin/add-contract/add-contract.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { NavbarEmpComponent } from './employer/navbar-emp/navbar-emp.component';
import { LayoutEmpComponent } from './employer/layout-emp/layout-emp.component';
import { CreateCompanyComponent } from './employer/create-company/create-company.component';
import { CreateOffreComponent } from './employer/create-offre/create-offre.component';
import { UpdateEmpComponent } from './employer/update-emp/update-emp.component';
import { MyCompaniesComponent } from './employer/my-companies/my-companies.component';
import { MyOffersComponent } from './employer/my-offers/my-offers.component';
import { RequestWorkComponent } from './employer/request-work/request-work.component';
import { OffreIdComponent } from './employer/offre-id/offre-id.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { NavbarCondidaComponent } from './condida/navbar-condida/navbar-condida.component';
import { LayoutCondidaComponent } from './condida/layout-condida/layout-condida.component';
import { HomeCondidaComponent } from './condida/home-condida/home-condida.component';
import { UpdateProfileCondidaComponent } from './condida/update-profile-condida/update-profile-condida.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TermsComponent,
    NavbarComponent,
    AllUsersComponent,
    LayoutComponent,
    DashboardComponent,
    AllCompaniesComponent,
    AllEmpComponent,
    AllOffersComponent,
    ReviewOffersComponent,
    AddRoleComponent,
    AddSecteurComponent,
    AddContractComponent,
    UpdateProfileComponent,
    NavbarEmpComponent,
    LayoutEmpComponent,
    CreateCompanyComponent,
    CreateOffreComponent,
    UpdateEmpComponent,
    MyCompaniesComponent,
    MyOffersComponent,
    RequestWorkComponent,
    OffreIdComponent,
    GuestPageComponent,
    NavbarCondidaComponent,
    LayoutCondidaComponent,
    HomeCondidaComponent,
    UpdateProfileCondidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptors([loginInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
