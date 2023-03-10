import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://performance.ford.com/content/fordracing/home/performance-vehicles/_jcr_content/par/fr_external_link_com_6/image.img.jpg/1621016491709.jpg'
    ),
  ];
}
