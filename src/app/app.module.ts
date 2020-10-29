import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BhsComponent } from './bhs/bhs.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { EarlyLifeComponent } from './early-life/early-life.component';
import { ScpcrComponent } from './scpcr/scpcr.component';
import { CitizenAdsComponent } from './citizen-ads/citizen-ads.component';
import { FamilyFriendsComponent } from './family-friends/family-friends.component';
import { NgxGalleryModule } from 'ngx-gallery';


@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BhsComponent,
    ScrollSpyDirective,
    EarlyLifeComponent,
    ScpcrComponent,
    CitizenAdsComponent,
    FamilyFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
