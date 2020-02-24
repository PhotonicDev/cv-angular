import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ItemRatingComponent } from './item-rating.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { StarRatingModule } from 'angular-star-rating'

@NgModule({
  declarations: [ItemRatingComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, StarRatingModule],
  exports: [ItemRatingComponent],
})
export class ItemRatingModule {}
