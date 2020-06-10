

//Classes 


// the class keyword is "syntacatic sugar"
// it's all constructor functions & prototypes under the hood
// This is not a new Object-oriented inhertance model in JS. 
// it existed with ES6

//classes in JS are special Funtions.

//if we were to do this as a constructor function

// function Rectangle(attributes){
// 	this.height = attributes.height;
// 	this.width = attributes.width;

// }

//how we do tthis as a class:
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};


//to declare / instantiate a class
const newRect = new Rectangle(400, 800);

console.log(newRect); //returns Rectangle { height: 400, width: 800 }


//the constructor function is the glue that binds this all together
//anything you need as direct propertyies on your class
//will be done through the constructor()

//no longer need Parent.call

//the extends keyword will abstract away the .call(this, someAttributes)
//the super() function will abstract away and funky syntax that 
//is used to bind our Objects prototypes to one another.
//Declarative and obvious which class inherits from which

//classes are just functions 
//EXTENDING A CLASS

//classes return us OBJECTS
class Animal {
	constructor(name){
		this.name = name;
	}


	speak(){
		console.log(this.name + 'makes a noise');
	}
};

//instead of having to make a child 
//with .call and object.create you can simply do this:

class Dog extends Animal {
	constructor(name){
		super(name);
	}

	speak(){
		console.log(this.name + ' barks.');
	}
};

/////

class Animal2{
	constructor(name){
		this.name = name;
	}
//speak method on this class
//so all objects that get created from this class
//will have access to the speak method: 
	speak(){
		console.log(`${this.name} says 'Hello"!`);
	}
};

//so now if you want to use this Animal class to make a new object...
//(classes make objects!!!)
const ryan = new Animal2('ryan');
//the object that we just declared is an instance of Animal2

//before you overwrote the prototype
console.log(ryan);
//the class keyword gives us performance benefits, by puttign methods on the prototype


// the speak method that we declared inside the class
//is not going to abe a property on thte ryan object
//but it's going to be a property, a method, on the Animal2 prototype


class Puppy extends Animal2 {
	//be sure to call super!!
	//when we declare this constructor, any of the properties 
	//that we pass that need to be added to the Puppy Object
	//that gets created from it, need to be passed in through the Constructor()
	constructor(name){
		//super will put that name back up on the parent object
		super(name);
	}

	speak(){
		console.log(`${this.name} barks!`)
	}
}

const sparky = new Puppy('Sparky');

//sparky isn't a function-- it's an object, 
//it HAS methods on it though!
sparky.speak();

console.log(sparky);


class Cat extends Animal2 {
	constructor(name){
		super(name);
	}

	speak(){
		console.log(`I'm a cat named ${this.name}.`)
	}
};

const becky = new Cat('Becky');

becky.speak();

console.log(becky);

///Challenge

class Grandparent{
	constructor(name, birthPlace, eyeColor, hairColor){
		this.name = name;
		this.birthPlace = birthPlace;
		this.eyeColor = eyeColor;
		this.hairColor = hairColor;
	};
	looks(){
		console.log(`${this.name} has ${this.eyeColor} eyes.`)
	}
}

class Parent extends Grandparent{
	constructor(name, birthPlace, eyeColor, hairColor){
		super(name, birthPlace, eyeColor, hairColor);
	}

	looks(){
		console.log(`${this.name} has ${this.eyeColor} eyes.`)
	}
};

class Offspring extends Parent{
	constructor(name, birthPlace, eyeColor, hairColor){
		super(name, birthPlace, eyeColor, hairColor);
	}
	looks(){
		console.log(`${this.name} has ${this.hairColor} hair and ${this.eyeColor} eyes.`)
	}
};


const alice = new Offspring('Alice', 'bay area', 'brown', 'brown');
const alan = new Parent('Alan', 'unknown', 'blue', 'red');
alice.looks();
alan.looks();



//Person constructor function

function Person1(attributes){
	this.name = attributes.name;
	this.age = attributes.age;
}

Person1.prototype.speak = function(){
	return `Hello my name is ${this.name}.`
};


//how to do this as a class - Easier! 
class Person2 {
	//this constructor is where we bind all of our properties to the object that is created
	constructor(attributes){
		this.name = attributes.name;
		this.age = attributes.age;
	}

	//the speak method lives in the class

	speak(){
		return `Hello my name is ${this.name}.`
	}

}



//the real benefit comes when we want to use inheritance
//... As a constructor function it's a lot of code:

function Child1(attributes){
	//if you don't know much about that call method, 
	//and why you have to do thtis, it can get really confusing. 
	Person.call(this, attributes);
	this.isChild = attributes.isChild;
};

Child1.prototype.checkIfChild = function(){
	if(this.isChild){
		console.log(`${this.speak}, and I'm a child object`)
	}
};

//now.. this is the way for classes:

class Child2 extends Person2 {
	constructor(attributes){
		super(attributes)//<-- important! this makes sure the class calls it
		this.isChild = attributes.isChild;

	}

	checkIfChild(){
		if(this.isChild){
			console.log `${this.speak}, and I'm a child object. `
		}
	}
};


//now you can create new objects 
//you have to create the object before you can start invoking functions (methods) on it!

const baby = new Child2({
	name: 'Sally',
	isChild: true
});

baby.checkIfChild();


// /// Lecture ///////
//review

//this - has no context unless you give it meaning.
// 1) window object (global)
//to make it undefined, you use strict mode
// 2) implicit object (to the left of the dot)
// explicitt - you tell JS exactly what this is when you invoke it
// you can apply it to objects with methods
// call, apply, and bind
// call immediately invokes the function and apply
// with call you pass arguments in one by one, with apply you can pass 
//them all in as an array
//bind returns a new function that you can invoke later
// new binding - when a function is invoked as a constructor function,
//this points to the new object that's created.



// what is a constructor function and when would it be useful?

// a way to create objects. When you want to make many objects and create mthods you
//can invoke on those objects
//we use constructor functions to share methods across objects.

//what is the problem with sharing those methods?

//memory intensive
//when a constructor function is made, when a new object is made
// if the method is built into the constructor function,
//it has to paint it every single time it occurs..

//How did we solve this?

//prototypes!

//What do they do?pass methods to thousands of objects
//we absract methods out and store them for later

//what is protoypical inheritance?

//everything in JS is an object!


//////CLASSES LECTURE

//classes are not hoisted
//they use strict -- thus preventing window binding
//forces us to write cleaner code withy errors if we don't
//Methods are a special syntax
//A constructor is visible

class Pet{
	constructor(attributes){
		this.name = attributes.name;
		this.location = attributes.location;
		this.phrase = attributes.phrase;
	}
	//methods go inside of the constructor function
	//less memory intensive, just syntax
	//since we already know it's a function we can just put it on in

	speak(){
		return `${this.name} says ${this.phrase}`;
	}
};

//extends links up the dunder proto - tells us where we came from
//extends tells super what to super to
//extends + super do what Object.create and paraent.call do

class PetChild extends Pet{ //Basically this is .create.object -- you have to tell the child who it's parent is
	constructor(attributes){
		//need SUPER so it inherits the parent's attributes
		//this is the .call
		super(attributes);

		

	}
	//any special 
};



class historicBird{
	constructor(attributes){
		this.name = attributes.name;
		this.hobbies = attributes.hobbies;
		this.color = attributes.color;
		this.inMovieWereBack = attributes.inMovieWereBack
	}

	play(){
		console.log(`${this.name} is into ${this.hobbies}.`);
	}
};

const largeBird = new historicBird({
	name: 'Petri',
	hobbies: 'eating other smaller birds',
	color: 'green'

})

largeBird.play();

class modernBird extends historicBird{//A clue to finding out if a class is a sub-class is to look for extends.
	constructor(attributes){
		super(attributes);
		this.atPetShop = attributes.atPetShop;
	}
	whereAreThey(){
		if(this.atPetShop){
			return `${this.name} is at the Pet shop.`
		}
	}
};

const houseBird = new modernBird({
	name: 'Polly',
	atPetShop: true

});

console.log(houseBird.whereAreThey());

//REVIEW !!
// placeholder values in function() are called parameters
// arguments are what get passed into the function

//console log is a method and we can wrap around the invocation 
//  to get a preview
// used for debugging
// it is a method - a function that belongs to an objects


//Objects {}
// have key value pairs
// key: value
//methods - functions that belong to objects


//Arrays - []
// order is the thing that matters 
// the computer assigns an index to every item int he array
//the index starts at 0

// callbacks & higher order functions 
// callback functions are passed in
// higher order functions receive callback as an argument

function maths(num1, num2, callback){
	return callback(num1, num2);

};

const add = (num1, num2) => num1 + num2;

console.log(maths(20, 30, add));



//skeleton of class syntax

class Parent{
	constructor(parent){
		//assign attributes here
	}
	//methods go here
}

class Child extends Parent{
	constructor(param){
		super(param);
		//assign any special attributes to child
	}
	//assign any special methods to child
}

//create objects here
// (new parent or new child, after the class as it's not hoisted)





































