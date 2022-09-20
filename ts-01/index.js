"use strict";
exports.__esModule = true;
exports.hello = void 0;
var world = 'world';
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
exports.hello = hello;
var ret = hello('me');
console.log(ret);

let a = 10;
if (true) {
    let a = 20;
    console.log(a);
    {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}
console.log(a);

let b = null;
if (b == undefined) {
    console.log('Hello');
}

let info = {
    name: 'MT',
    age: 24
};
if (info.firstName == undefined) {
    console.log('Tu Heo');
}
else console.log(info.firstName);
info.firstName = 'Tu';
if (info.firstName == undefined) {
    console.log('Tu Heo');
}
else console.log(info.firstName);
console.log(info);