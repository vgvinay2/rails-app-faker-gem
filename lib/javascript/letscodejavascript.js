// Common JavaScript Types

//Undefined => undefined
//Null      => null
//Boolean   => true/false
//String    => 'Foo'
//Number    => 34343
//Object    => {bar: 'Baz'}
//Function  => function() { ... };
//Array     => [1, 'string', 2.34, [1, 3, 6]]
//RegExp    => //

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Primitive Types

//Undefined => undefined
//Null      => null
//Boolean>  => true/false
//String    => 'Foo'
//Number    => 34343
//Object    => {bar: 'Baz'}

// Special Object

//Function  => function() { ... };
//Array     => []
//RegExp    => //


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Object are key/value pair in other language we called Dictionary, associative array or hash. But
// basically it is key value pair.

 var myObj = {
     a: undefined,
     b :null,
     c: 'Foo',
     d: 123,
     e: {
         eName: 'eFoo',
         eAddress: 'Bangalore'
     },
     setName: function() { //...
      }
 };

// Difference Primitive Types object and Object is primitive are passed by value whereas
// Object is passed by reference.

var number1, number2;
number1 = 10;
number2 = number1;
console.log(number1);
number2 = 20;
console.log(number1);
console.log(number2);
// here value are getting copied from number1 => number2.
// So there are two copy each have individually.
// Primitive data type don't dependent each other.


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Where as Object are passed by reference
// So if we  change object1 , object2 get changed.

var object1, object2;

object1 = {
    x: 10
};
object2 = object1;

console.log(object1.x);
console.log(object2.x);
object2.x = 20;
console.log(object1.x);
console.log(object2.x);
// Learn more about object refer java goods part

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Function are regular object so we can assign a property too.

function myFunction(a, b){
    return a + b;
};

myFunction.foo = 'Bar';
var myfunction_obj = myFunction;

console.log(myfunction_obj(2, 3));

// When we put the function inside the object here object mean key/value pair,
// we typically called as methods.

var myObject = {
    val: 42,
    get: function() {
        return this.val;
    }
};
// For calling get methods , we use object name and method name and parentheses.
myObject.get();  // parenthese are mandatory for calling the function,
                 // otherwise it will return the function instead.

// Prototype Inheritance

var parent = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var child  = Object.create(parent);
// Now as we create the object of myObject class and now we can do anything with the child object.
// we can add/change the value to the chuld object.
child.val = 3.14;

//  we can subclassed this class also

var grandChild  = Object.create(child);

parent.get();     // 42
child.get();      // 3.14
grandChild.get(); // 3.14

// THIS IS THE FUNDAMENTAL OF INHERITANCE JAVASCRIPT , AS WE HAVE SEEN OTHER WAYS OF TALKING ABOUT
// JAVASCRIPT INHERITANCE THEY MIGHT FOCUS ON CLASS OR SOMETHINGELSE FIRST . BUT THIS IS A BASIC OF
// PROTOTYPE BASED INHERITANCE. HAE JAVA SCRIPT HAVE ONLY ONE NO ANY FORM OF INHERITANCE OTHER THAN
// PTOTOTYOE INHERITANCE.

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// POLYMORPHISN AND METHOD OVERRIDING
// POLYMORPHISN mean same method but different behaviour.

// sometime we need to override the methods in child class which inherit from parent .

var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.get = function() {
    return this.val + '!!';
};

answer.get();     // 42
firmanswer.get(); // 42!!

///////////////////////////////// Some reseach 1 ////////////////////////////
///////////////////////////////// Some reseach 1/////////////////////////////
// we are doing this research beacuse the os code dublicacy 'this.val' two
// times and much more thing are going there.


var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.val = 3.14;
firmanswer.get = function() {
    return answer.val + '!!';
};

answer.get();     // 42
firmanswer.get(); // 42!! // even ki we hasd change the value of val variabe.


///////////////////////////////// Some reseach 2 ////////////////////////////
///////////////////////////////// Some reseach 2 /////////////////////////////
// example of call method

var answer = {
    val: 42,
    get: function() {
        return this.val;
    }
};

var firmanswer  = Object.create(answer);

firmanswer.val = 3.14;
firmanswer.get = function() {
    return answer.get.call(this) + '!!';
};

answer.get();     // 42
firmanswer.get(); // 3.14

/////////////////////////////////////////////////////
//////////CLASSES AND INSTANTIATION /////////////////
/////////////////////////////////////////////////////
// We can define our object anyway you like ,
// but the common way is to saperate your data from methods.

var answer = {
    val: 42, // as we set the value which is hard coded and that will be same for all.
    get: function() {
        return this.val;
    }
};
answer.get(); // 42


// instead of this what people generally do, create the methods and the set value
// and call that methods on it.

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    get: function() {
        return this.val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;
dessertAnswer.get();

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    get: function fn1() {
        return this.val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;
dessertAnswer.get();


// This step is curcial.

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!!';
}

var luckyAnswer  = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
luckyAnswer.get(); // 7!!!


var magicAnswer  = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
magicAnswer.get(); // 3!!!

// in this approach prototype typically called classes and the object that extends them call
// instaiation/instance . a class that extends another class called subclassed of that class.
// well this is not a good approach 1: violate encapsulation 2: repetation


/////////////////////////////////////////////////////
////////////// Refactoring the above program ////////
/////////////////////////////////////////////////////

var AnswerPrototype = { // here we had put the function in the prototype called AnswerPrototype.
    constructor: function fn0(value){
        this._val = value; // here we chage val => _val this is a preety convention in
                           // javascript that value is provate.
    },
    get: function fn1() {
        return this._val;
    }
};

// now multiple Object extends that prototype and doing there work.
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
dessertAnswer.get();


// This step is curcial.

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + '!!!';
}

var luckyAnswer  = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get(); // 7!!!


var magicAnswer  = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); // 3!!!















