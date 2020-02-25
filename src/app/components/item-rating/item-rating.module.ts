import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ItemRatingComponent } from './item-rating.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [ItemRatingComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule],
  exports: [ItemRatingComponent],
})
export class ItemRatingModule {}
