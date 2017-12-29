import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoreComponent } from './components/store/store.component';
import { MusicComponent } from './components/music/music.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MetaComponent } from './components/meta/meta.component';
import { FreebiesComponent } from './components/freebies/freebies.component';
import { SpotifyPlayerComponent } from './components/spotify-player/spotify-player.component';
import { FbPromoComponent } from './components/fb-promo/fb-promo.component';
import { AlbumArtComponent } from './components/album-art/album-art.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'music', component: MusicComponent},
    {path: 'shop', component: StoreComponent},
    {path: 'store', component: StoreComponent},
    {path: 'freebies', component: FreebiesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    MusicComponent,
    NavbarComponent,
    MetaComponent,
    FreebiesComponent,
    SpotifyPlayerComponent,
    FbPromoComponent,
    AlbumArtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
