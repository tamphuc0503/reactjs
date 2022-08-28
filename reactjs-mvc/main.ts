import { User } from "./user";
import { UserComponent } from "./user.component";
import { UserController } from "./user.controller";

const user = GetFromDatabase();
const userComponent = new UserComponent();
const userController = new UserController(userComponent, user);
userController.setUsername('mt');
userController.showUserDetail();

function GetFromDatabase() {
    return new User('phuc', 20);
}

