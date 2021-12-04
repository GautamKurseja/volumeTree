import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';






const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
   { path: "listing", component: ListingComponent, pathMatch: "full" },
  { path: "**", component: ListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
