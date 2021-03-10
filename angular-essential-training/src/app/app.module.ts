import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { RecipeFormComponent } from './recipe-form.component';
import { ShowRecipesComponent } from './show-recipes.component';
import { RecipeListComponent } from './recipe-list.component';
//test change

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    RecipeFormComponent,
    ShowRecipesComponent,
    RecipeListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
