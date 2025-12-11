import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms/terms.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AllCompaniesComponent } from './admin/all-companies/all-companies.component';
import { AllEmpComponent } from './admin/all-emp/all-emp.component';
import { authGuard } from './admin/guardAdmin/auth.guard';
import { ReviewOffersComponent } from './admin/review-offers/review-offers.component';
import { AllOffersComponent } from './admin/all-offers/all-offers.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddContractComponent } from './admin/add-contract/add-contract.component';
import { AddSecteurComponent } from './admin/add-secteur/add-secteur.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { LayoutEmpComponent } from './employer/layout-emp/layout-emp.component';
import { CreateCompanyComponent } from './employer/create-company/create-company.component';
import { CreateOffreComponent } from './employer/create-offre/create-offre.component';
import { UpdateEmpComponent } from './employer/update-emp/update-emp.component';
import { MyCompaniesComponent } from './employer/my-companies/my-companies.component';
import { MyOffersComponent } from './employer/my-offers/my-offers.component';
import { RequestWorkComponent } from './employer/request-work/request-work.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { LayoutCondidaComponent } from './condida/layout-condida/layout-condida.component';
import { HomeCondidaComponent } from './condida/home-condida/home-condida.component';
import { UpdateProfileCondidaComponent } from './condida/update-profile-condida/update-profile-condida.component';
import { condidaGuard } from './condida/guard/condida.guard';
import { employerGuard } from './employer/guard/employer.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: 'welcome', component: GuestPageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  {
    path: 'admin',
    component: LayoutComponent, canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'allUsers', component: AllUsersComponent },
      { path: 'allEmployers', component: AllEmpComponent },
      { path: 'allCompanies', component: AllCompaniesComponent },
      { path: 'allOffers', component: AllOffersComponent },
      { path: 'reviewOffers', component: ReviewOffersComponent },
      { path: 'addRole', component: AddRoleComponent },
      { path: 'addSecteur', component: AddSecteurComponent },
      { path: 'addContract', component: AddContractComponent },
      { path: 'updateProfile', component: UpdateProfileComponent },
    ]
  },
  {
    path: 'employer', component: LayoutEmpComponent, canActivate: [employerGuard] ,children: [
      { path: 'createCompany', component: CreateCompanyComponent },
      { path: 'createOffre', component: CreateOffreComponent },
      { path: 'updateProfile', component: UpdateEmpComponent },
      { path: 'myCompanies', component: MyCompaniesComponent },
      { path: 'myOffers', component: MyOffersComponent },
      { path: 'viewOffer/:id', component: RequestWorkComponent },
    ]
  },
   {path: 'condida', component: LayoutCondidaComponent, canActivate: [condidaGuard],children : [
    {path: 'home', component: HomeCondidaComponent},
    {path: 'updateProfile', component: UpdateProfileCondidaComponent},
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
