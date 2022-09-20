import { Animal } from "./animal";

/**
 * OOP 2: Create a Dog class extends Animal
 * OOP 2.1: Override "Say"
 */
export class Dog extends Animal {
    say(): string {
        return "Gau gau";
    }

}