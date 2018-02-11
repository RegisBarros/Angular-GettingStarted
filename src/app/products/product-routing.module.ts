import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductsGuardService } from './products-guard.service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductsGuardService],
        component: ProductDetailComponent }
    ]),
  ],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
