import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoreComponent } from './components/store/store.component';
import { MusicComponent } from './components/music/music.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'music', component: MusicComponent},
    {path: 'shop', component: StoreComponent},
    {path: 'store', component: StoreComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
