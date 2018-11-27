import { Component } from '@angular/core';
import { Model, ToDoItems } from './model'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
  getToDoItems() {
    //return this.model.item.filter(function (item) { return !item.done });
    //Shortcut using Lambda Expression
    return this.model.item.filter(item => !item.done);
  }
  addItem(newItem) {
    if (newItem != "") {
      this.model.item.push(new ToDoItems(newItem, false));
    }
  }
}
