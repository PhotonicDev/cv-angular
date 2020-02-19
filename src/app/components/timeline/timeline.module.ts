import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimelineComponent } from './timeline.component'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
    declarations: [TimelineComponent],
    imports: [CommonModule, MatCardModule, MatChipsModule, FlexLayoutModule],
    exports: [TimelineComponent],
    providers: [],
})
export class TimelineModule {}
