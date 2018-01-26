import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Rendering Data to html files
  styleUrls: ['./app.component.css'] // Applying CSS to perticular component 
})
export class AppComponent {
  welcome : string; //Declaring welcome Variable as string
  movies : [{
      movie: string, //Declaring movie Variable as string
      geners : string, //Declaring geners Variable as string
      release : string //Declaring release Variable as string
  }];

// creating list of movie data
  constructor(){
      this.welcome = "Display List Of Data using ngFor in Angular 5"
      this.movies = [
        {
            movie : "The Transporter",
            geners: "Action",
            release : "August 23"
        },
        {
          movie : "Sherlock Homes",
          geners: "Suspense",
          release : "August 23"
        },
        {
          movie : "Minions",
          geners: "Comedy",
          release : "August 23"
        },
        {
          movie : "Step Up - All In",
          geners: "Dancing",
          release : "August 23"
        }
      ]
  };
}
