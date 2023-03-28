import { Injectable } from '@nestjs/common';

export interface Movie{
  id:number;
  name:string;
  year:number;
}

@Injectable()
export class AppService {
  private movies:Movie[] = [
    { id:1,name: "Star wars: The Force Awakens", year:2015},
    { id:2,name: "Star wars: The Force Awakens", year:2016},
    { id:3,name: "Star wars: The Force Awakens", year:2017},
  ];
  getMovies(): Movie[]{
    return this.movies;
  }
}
