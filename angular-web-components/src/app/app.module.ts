import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elem = createCustomElement(NewsComponent, { injector });
    customElements.define("news-widget", elem);
  }

  ngDoBootstrap() { }
}
