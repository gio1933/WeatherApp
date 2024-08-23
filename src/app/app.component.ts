import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  weatherInfo: any = [];
  appBackColor: string = "";
  backImage: string = "";

  contructor(private weather: WeatherService){
    this.getCurrentPosition();
    setTimeout(()=>{
      if(this.weatherInfo.length === 0){
        this.getWeatherInfo("mexico");
      }
      this.getStyle(this.weatherInfo);
    },1000);
  }

  getCurrentPosition(){
    this.weather.getLocation().then(resp => {
      this.weather.getFromActualPosition(resp.lng, resp.lat).subscribe(data => {
        this.weatherInfo = data;
      });
    });
  }



}
