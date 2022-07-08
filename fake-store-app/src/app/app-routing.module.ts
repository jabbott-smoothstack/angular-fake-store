import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path: "", component: MainComponentComponent},
  {path: "homePage", component: HomeComponent},
  {path: "productPage", component: ProductPageComponent},
  {path: "aboutPage", component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
