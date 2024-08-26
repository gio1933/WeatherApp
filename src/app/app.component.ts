import { Component, OnChanges, OnInit } from '@angular/core';
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

  constructor(private weather:WeatherService){
    this.getCurrentPosition();
    setTimeout(()=>{
      if(this.weatherInfo.length === 0){
        this.getWeatherInfo("bogota");
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

  getStyle(data:any){
    if(parseInt(data.main.temp) < 27){
      this.appBackColor = "#3053AE";
      this.backImage = "url('../assets/cold.jpg')";
    }else if(parseInt(data.main.temp) >= 27){
      this.appBackColor = "#E9B329";
      this.backImage = "url('../assets/warm.jpg')";
    }
  }

  getWeatherInfo(value: string){
    this.weather.getFromUserSelection(value).subscribe(data => {
      this.weatherInfo = data;
      setTimeout(() => {
        this.getStyle(this.weatherInfo);
      },500);
    });
  }

}