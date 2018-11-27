export class Model {
    user;
    item;
    constructor() {
        this.user = "Mobashir";
        this.item = [new ToDoItems("Buy Flowers", false),
        new ToDoItems("Get Shoes", false),
        new ToDoItems("Collect Ticket", false),
        new ToDoItems("Call Yadu", false)]

    }
}
export class ToDoItems {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }

}

