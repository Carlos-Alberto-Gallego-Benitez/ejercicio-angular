import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe((data: any) => {
      this.data = data;
      console.log(data);
    })
  }

}
