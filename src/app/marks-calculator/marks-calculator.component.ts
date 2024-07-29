import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marks-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marks-calculator.component.html',
  styleUrls: ['./marks-calculator.component.css']
})
export class MarksCalculatorComponent {
  totalMarks: number = 0;
  obtainedMarks: number = 0;
  percentage: number = 0;
  grade: string = '';

  calculatePercentage(): void {
    if (this.totalMarks === 0) {
      this.percentage = 0;
      this.grade = 'Invalid';
      return;
    }

    this.percentage = (this.obtainedMarks / this.totalMarks) * 100;

    if (this.percentage >= 90) {
      this.grade = 'A+';
    } else if (this.percentage >= 80) {
      this.grade = 'A';
    } else if (this.percentage >= 70) {
      this.grade = 'B';
    } else if (this.percentage >= 60) {
      this.grade = 'C';
    } else if (this.percentage >= 50) {
      this.grade = 'D';
    } else {
      this.grade = 'F';
    }
  }
}

