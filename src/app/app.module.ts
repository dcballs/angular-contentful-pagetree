import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './services/contentful.service';
import { PreloadService, preloadServiceFactory } from './services/preload.service';
import { NavigationService } from './services/navigation.service';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContentfulService,
    PreloadService,
    NavigationService,
    {
      provide: APP_INITIALIZER,
      useFactory: preloadServiceFactory,
      deps: [Injector, NavigationService, PreloadService],
      multi: true
    }
  ],
  entryComponents: [PageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
