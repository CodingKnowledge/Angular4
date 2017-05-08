import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from 'app/recipes/recipes.component';
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}