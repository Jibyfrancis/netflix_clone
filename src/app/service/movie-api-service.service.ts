import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://api.themoviedb.org/3';
  apikey = '99573ea9cd30c8ead26070c40e41be7a';

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
// trendingMoviesData
trendingMovieApiData():Observable<any>
{
return this.http.get(`${this.baseurl}/trending/all/day?api_key=${this.apikey}`)
}
// moviedetails
getMovieDetails(data:any):Observable<any>{
return this,this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}
// getMovieVideo
getMovieVideo(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}

// getMovieCast
getMovieCast(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}
  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

}


