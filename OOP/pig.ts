import { Animal } from "./animal";

/**
 * OOP 2: Create a Pig class extends Animal
 * OOP 2.1: Override "Say"
 */
export class Pig extends Animal {
    say(): string {
        return "Ut ut";
    }
}