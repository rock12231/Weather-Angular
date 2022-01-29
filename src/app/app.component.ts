import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  data:any
  city:any = 'kanpur'
  c:any=0
  constructor(private http:HttpClient) {
    this.clickfun();
  }

  ngOnInit(){
  
  }

  clickfun() {
    console.log(this.city,"City")
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=d21ed78a8589962c6cebb0784ab717e4')
    .subscribe(
      rec => {
        this.data = rec;
        console.log(rec, "Data");
        console.log(this.data.weather[0].id, "Id..........")
        console.log(this.data.name, "name..........")
        this.c = this.data.main.temp
        this.c = this.c - 273.15 
        console.log(this.c);
        
      }
    )
    // this.c = this.data.main.temp
    // console.log(this.c, "C..........")
  }
}

