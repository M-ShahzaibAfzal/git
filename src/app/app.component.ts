import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarksCalculatorComponent } from './marks-calculator/marks-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarksCalculatorComponent],
  template: '<app-marks-calculator></app-marks-calculator>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marksPercentageApp';
}
