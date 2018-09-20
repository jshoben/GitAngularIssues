import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitAngularIssues';
  response: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://api.github.com/repos/Angular/Angular/issues')
      .subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }
}
