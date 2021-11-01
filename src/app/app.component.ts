import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any;

  constructor (private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3').subscribe((responseData: any) => {
      console.log(responseData)
      this.data = responseData;
    })

  }
  title = 'DemoHttp';
}
