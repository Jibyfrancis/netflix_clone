import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResults: any = [];
  trendindaResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
this.actionMovie();
this.adventureMovie()

  }
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult');
      this.bannerResults = result.results

    })
  }
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendindaResult = result.results

    })
  }
 // action
 actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.actionMovieResult = result.results;
  });
}

// adventure
adventureMovie() {
  this.service.fetchAdventureMovies().subscribe((result) => {
    this.adventureMovieResult = result.results;
  });
}

}
