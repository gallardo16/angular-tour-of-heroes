import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule }               from '@angular/common/http';
import { NgModule }                       from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { BrowserModule }                  from '@angular/platform-browser';
import { NgxsEmitPluginModule }           from '@ngxs-labs/emitter';
import { NgxsLoggerPluginModule }         from '@ngxs/logger-plugin';
import { NgxsModule }                     from '@ngxs/store';

import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';
import { DashboardComponent }             from './dashboard/dashboard.component';
import { HeroDetailComponent }            from './hero-detail/hero-detail.component';
import { HeroSearchComponent }            from './hero-search/hero-search.component';
import { HeroState }                      from './hero.state';
import { HeroesComponent }                from './heroes/heroes.component';
import { InMemoryDataService }            from './in-memory-data.service';
import { MessagesComponent }              from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxsModule.forRoot([
      HeroState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsEmitPluginModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
