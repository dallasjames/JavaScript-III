/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is barely used unless you are creating an extension and probably an accident
* 2. implicit binding is the original way to make a variable
* 3. New binding would be used for adding new products on a site
* 4. explicit binding allows for use of constructors and gets DRYer code
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const Aple = {
    price: 4000,
    thing: "applePencil",
}
// Principle 3

// code example for New Binding
function Apple(bla) {
    this.price = bla.price;
    this.thing = bla.thing;
}

const iPad = new Apple(8000);
const iPhone = new Apple(4000);
console.log(Apple);
// Principle 4

// code example for Explicit Binding
function newThing(thing, price) {
    this.thing = name;
    this.price = price;
}

function Accessory(thing, price) {
    newThing.call(this, thing, price);
    this.place = "Accessory";
    console.log = (`${this.thing} is $${this.price}`);
}

console.log(new Accessory("bottle", 999).price);