import { Component } from '@angular/core';
//var express = require('express');
//var app = express();

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
/*   
  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'sa',
      password: 'password',
      server: 'localhost', 
      database: 'mssd'
  };

  // connect to your database
  sql.connect(config, function (err) {
  
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
        
    // query to the database and get the records
    request.query('SELECT dbo.Ingredients.IngredientID, dbo.Ingredients.IngredientName, dbo.Ingredients.Vegetarian AS RecipeID, dbo.Recipes.RecipeID AS RecipeName, dbo.Recipes.RecipeName AS RecipeDescription, dbo.Recipes.RecipeDescription FROM dbo.Recipes INNER JOIN dbo.RecipeIngredient ON dbo.Recipes.RecipeID = dbo.RecipeIngredient.RecipeID INNER JOIN dbo.Ingredients ON dbo.RecipeIngredient.IngredientID = dbo.Ingredients.IngredientID', function (err, recordset) {
      if (err) console.log(err)

      // send records as a response
      recipes = res.send(recordset);
    });
  });
*/
  recipes = [
    {
      id: 1,
      name: 'Mac and Cheese',
      vegetarian: 'yes', // formerly medium
      ingredient1: 'noodles', // formerly category
      ingredient2: 'cheese', // formerly year
      ingredient3: null, //formerly watchedOn
      isFavorite: false // formerly isFavorite
    },
    {
      id: 2,
      name: 'Spaghetti',
      vegetarian: 'no',
      ingredient1: 'noodles',
      ingredient2: 'sauce',
      ingredient3: 'meat',
      isFavorite: true
    }, {
      id: 3,
      name: 'Nachos',
      vegetarian: 'yes',
      ingredient1: 'cheese',
      ingredient2: 'chips',
      ingredient3: 'salsa',
      isFavorite: false
    }
  ];

  onMediaItemDelete(recipe) { }
}