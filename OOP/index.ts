import { Dog } from "./dog";
import { Pig } from "./pig";
import { Switch } from "./switch";

/**
 * OOP 1
 */
let dog = new Dog();
let d = dog.say();
console.log(d);

let pig = new Pig();
let p = pig.say();
console.log(p);

/**
 * OOP 3: Interface and parents.
 */
dog.sitAndSay('Hokkaido');
pig.sitAndSay('Rung');

/**
 * OOP 4: using Depdency injection
 */

const switcher = new Switch();
switcher.sayByInterface(dog);
switcher.sayByInterface(pig);

/**
 * Say by parent class.
 */
switcher.sayByAnimal(dog);
switcher.sayByAnimal(pig);

