import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  count = 0;

  handleCounter(val: string) {
    if (val === 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else if (val === 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
  
}
