import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenreComponent } from './pages/genre/genre.component';

const routes: Routes = [
  {
     path : "",
     component : HomeComponent
  },

  {
    path : "about",
    component:AboutComponent

  },
  {
     path : "movies",
     component:MoviesComponent
      
  },
  {
     path : "genre",
     component:GenreComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
