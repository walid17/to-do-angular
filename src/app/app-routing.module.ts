import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from 'src/app/todos/todos.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { TodosResolver } from 'src/todos.resolver';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { CanActivateTodosGuard } from 'src/app/can-activate-todos.guard';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'sign-in',
      pathMatch: 'full'
    },
    {
      path: 'sign-in',
      component: SignInComponent
    },
    {
      path: 'todos',
      component: TodosComponent,
      canActivate: [
        CanActivateTodosGuard
      ],
      resolve: {
        todos: TodosResolver
      }
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosResolver, CanActivateTodosGuard]
})
export class AppRoutingModule {
}