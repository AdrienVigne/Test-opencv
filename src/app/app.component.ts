import {Component, ElementRef, ViewChild} from '@angular/core';

declare var cv : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-opencv';

  @ViewChild('originalImage') public originalImage! : ElementRef;

  constructor() {
  }


}
