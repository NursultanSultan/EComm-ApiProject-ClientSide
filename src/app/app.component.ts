import { Component } from '@angular/core';

declare var $:any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerseClient';
}

$.get("http://localhost:28414/api/Product")
