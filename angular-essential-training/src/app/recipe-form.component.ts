import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      vegetarian: new FormControl('No'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      ingredient1: new FormControl(''),
      ingredient2: new FormControl(''),
      ingredient3: new FormControl(''),
      //year: new FormControl(''),
    });
  }

  /*
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } 
    else {
      return { 
        year: {
          min: minYear,
          max: maxYear
        }
      };
    }
  }
  */

  onSubmit(recipe) {
    console.log(recipe);
  }
}
