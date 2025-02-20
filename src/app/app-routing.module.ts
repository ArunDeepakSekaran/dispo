import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path:'' ,pathMatch: 'full', redirectTo:'home'},
  { path: '', component: HomeComponent },
  

//   { path: 'products', component: ProductsComponent },
//   { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
