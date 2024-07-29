import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component'; 
import { ReactiveformComponent } from './reactiveform/reactiveform.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TemplateFormComponent,ReactiveformComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'forms';
}

=======
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
>>>>>>> origin/master
