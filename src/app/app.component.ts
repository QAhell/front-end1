import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-derp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'front-end1';
  text = 'Empty Page';

  constructor(private http: HttpClient) {
  }

  onClick() {
    this.http.get('http://localhost:9901/greeting', {
      params: {name: 'Front-End1'},
      headers: {'Access-Control-Allow-Origin': '*'}
    }).toPromise()
      .then((response: any) => this.text = response.id + ' ' + response.content).catch(error => console.log(error));
  }
}
