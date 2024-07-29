import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css' // Corrected this line
})
export class TemplateFormComponent {
   
  register(regdata: NgForm){ 
    console.log(regdata.value); 
    console.log(regdata.valid); 
    
  }
}

