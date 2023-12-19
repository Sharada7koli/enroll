// footer.component.ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Add styles if needed
})
export class FooterComponent {

  getCurrentDateTime(): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(new Date(), 'short')!;
  }
}
