import { Animal } from "./animal";
import { Isay } from "./iSay";

export class Switch {
    sayByInterface(animal: Isay) {
        if (animal) {
            animal.say();
        }
    }

    sayByAnimal(animal: Animal) {
        if (animal) {
            animal.say();
        }
    }
}