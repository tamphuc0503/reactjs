import { Isay } from "./iSay";

/**
 * OOP 1: declare a parent class.
 * OOP 3: implements ISay. 
 */
export class Animal implements Isay {
    say(): string {
        return "a";
    }
    /**
     * OOP 3: Create a private method
     * OOP 3. private is an accessor and no sub-class or children-class can access
     */
    private sit() {
        console.log("I'm sitting");
    }
    /**
     * Create a 
     * @param name 
     */
    sitAndSay(name: string) {
        console.log(`I am ${name}`);
        this.sit();
        console.log(this.say());

    }
}