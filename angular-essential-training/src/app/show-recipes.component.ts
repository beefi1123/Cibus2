import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent {
  @Input() recipe;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.recipe);
  }
}
