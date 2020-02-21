import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ApplicationRef } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'
import { TimelineModule } from './components/timeline/timeline.module'
import { StateContext } from '@ngxs/store'
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from '@ngxs/hmr-plugin'
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
export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
  public hmrNgxsStoreOnInit(
    ctx: StateContext<Snapshot>,
    snapshot: Partial<Snapshot>
  ) {
    ctx.patchState(snapshot)
  }

  public hmrNgxsStoreBeforeOnDestroy(
    ctx: StateContext<Snapshot>
  ): Partial<Snapshot> {
    return ctx.getState()
  }
}
