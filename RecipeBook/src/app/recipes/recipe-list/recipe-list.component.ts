import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description', 'http://images.media-allrecipes.com/images/59116.jpg'),
    new Recipe('A Test Recipe', 'Test Description', 'http://images.media-allrecipes.com/images/59116.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
