import { NgModule } from '@angular/core';


import { BaseModule } from '@base/base.module';
import { FeaturesComponent } from '@features/features.component';
import { ProfileModule } from '@features/profile/profile.module';
import { AddPostModule } from '@features/add-post/add-post.module';
import { FavoritesModule } from '@features/favorites/favorites.module';
import { ReviewModule } from '@features/review/review.module';
import { MessagesModule } from '@features/messages/messages.module';
import { PaymentModule } from '@features/payment/payment.module';
import { SideNavigationPanelModule } from '@features/side-navigation-panel/side-navigation-panel.module';


@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    BaseModule,
    ProfileModule,
    AddPostModule,
    ReviewModule,
    FavoritesModule,
    MessagesModule,
    PaymentModule,
    SideNavigationPanelModule
  ]
})
export class FeaturesModule { }
