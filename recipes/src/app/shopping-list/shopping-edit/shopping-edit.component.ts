import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameinput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputref: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

  }

  onAddItem(){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value

    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngre dient);

    this.slService.addIngredient(newIngredient);
  }

}
