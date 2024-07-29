import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  regForm: FormGroup;

  constructor() {this.regForm = new FormGroup({});
 }

  ngOnInit() {
    this.regForm = new FormGroup({
      id: new FormControl(), // Optionally provide default values
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      mobilenumber: new FormControl()
    });
  }


  register(formdata:FormGroup){
 
  console.log(this.regForm.value);

  }
}
