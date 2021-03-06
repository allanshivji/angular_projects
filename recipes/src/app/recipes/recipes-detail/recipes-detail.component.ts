import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    console.log(Recipe);
   }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngrediensToShoppingList(this.recipe.ingredients);
  }

}
