import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(recipes) {
    const categories = [];
    recipes.forEach(recipe => {
      if (categories.indexOf(recipe.category) <= -1) {
        categories.push(recipe.category);
      }
    });
    return categories.join(', ');
  }
}
