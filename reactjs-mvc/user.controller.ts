import { User } from "./user";
import { UserComponent } from "./user.component";

export class UserController {

    showUserDetail() {
        this.component.showUserDetail(this.model);
    }

    setUsername(username: string) {
        this.model.username = username;
    }

    constructor(private component: UserComponent, private model: User) {

    }
}