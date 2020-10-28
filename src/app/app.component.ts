import { Component } from '@angular/core';
import { MaService } from './ma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lat: string ='';
  lng: string ='';

  location: object;
  constructor(private google:MaService){}
  ngOnInit() {
    this.google.getLocation().subscribe(data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }
}
