import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = "13dc7b5fa5931e769c3cba13b5aee73d"
  uri: string = ""

  constructor(private http: HttpClient) { }
  
  getFromUserSelection(city:string){
    this.uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(this.uri);
  }

  getFromActualPosition(lon:string, lat:string){
    this.uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(this.uri);
  }

  getLocation():Promise<any>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng:resp.coords.longitude, lat:resp.coords.latitude});
      })
    });
  }
}