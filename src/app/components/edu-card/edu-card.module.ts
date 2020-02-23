import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EduCardComponent } from './edu-card.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [EduCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule],
  exports: [EduCardComponent],
})
export class EduCardModule {}
