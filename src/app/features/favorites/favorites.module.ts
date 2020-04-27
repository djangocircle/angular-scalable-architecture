import { NgModule } from '@angular/core';

import { FavoritesComponent } from '@features/favorites/favorites.component';


@NgModule({
  declarations: [FavoritesComponent],
  exports: [FavoritesComponent]
})
export class FavoritesModule { }
