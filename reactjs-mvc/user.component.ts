import { User } from "./user";

export class UserComponent {
    showUserDetail(user: User) {
        console.log(`${user.username} is ${user.age} years old`);
    }
}