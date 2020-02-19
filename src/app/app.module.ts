import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'
import { TimelineModule } from './components/timeline/timeline.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule,
        TimelineModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
