import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: `
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px auto;
      color: #ddd;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #333;
    }
    caption {
      font-weight: bold;
      margin-bottom: 10px;
    }
  `
})
export class BasicsPageComponent {

  public fullname: string = 'erick daniel';
  public lastname: string = 'BAUTISTA OLANO';
  public address: string = 'avenida german aguirre 1360, san martin de porres, lima, perú';

  public today: Date = new Date();
  public birhtday: Date = new Date(1991, 3, 20, 18, 48, 53)

}
