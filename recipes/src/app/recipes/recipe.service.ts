import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'This is a test',
            'https://downshiftology.com/wp-content/uploads/2018/10/Deviled-Eggs-Recipe.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('French Fries', 3)

            ]) 
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngrediensToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}