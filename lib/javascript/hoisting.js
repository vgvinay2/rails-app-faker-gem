// The Hoisting Concept

// 1: function expressions are not hoisted.

// 2: hosting typically means variables and functions are hoisted to top before executing the code.
// Key to keep in mind when coding on the order of the loading if using function expressions.

// 3: this problem will occur between variable and function.
// 4: In JavaScript function declarations ( function foo() {} )
// and variable declarations ( var bar ) are ‘hoisted’ .
// i.e. are silently moved to the very top of the scope.
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////EXAMPLE ONE WITH LOAD ORDER /////////////////
///////////////////////////////////////////////////////////////////////////////////////

function addOfSquare(a, b){
    var x = add(a*a, b*b);
    return x;

    function add(c, d){
        var a = c + d;
        return a;
    };
};
addOfSquare(2, 3);


/////////////////////////////////////////////////
///////////!!!LOAD ORDER IN MEMORY///////////////
/////////////////////////////////////////////////

function addOfSquare(a, b){
    var x = undefined;

    function add(c, d){
        var a = c + d
        return a;
    };

    x = add(a*a, b*b); // this will not append var keywords before x variable
    return x;

};
addOfSquare(2, 3);


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////EXAMPLE SECOND WITH LOAD ORDER /////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
function getMisteryNumber() {
    function selectNumber() {
        return 10;
    };

    return selectNumber();

    function selectNumber() {
        return 30;
    };
};
getMisteryNumber(); // 30

/////////////////////////////////////////////////
///////////!!!LOAD ORDER IN MEMORY///////////////
/////////////////////////////////////////////////


function getMisteryNumber() {

    function selectNumber() {
        return 10;
    };

    function selectNumber() { // As JS compiler see that there is another function with same so,
                              // override selectNumber(First).
        return 30;
    };

    return selectNumber();

};
getMisteryNumber(); // 30


///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////EXAMPLE THREE WITH LOAD ORDER ///////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////FUNCTION EXPRESSIONS ARE NOT HOISTED///////////////////////////////////////

function geFirstNumber() {
    var selectNumber = function () {
        return 10;
    };

    return selectNumber();

    var selectNumber = function () {
        return 30;
    };
};
geFirstNumber(); // 30


/////////////////////////////////////////////////
///////////!!!LOAD ORDER IN MEMORY///////////////
/////////////////////////////////////////////////

function geFirstNumber() {
    var selectNumber = undefined;
    var selectNumber = undefined; // now first selectNumber is no more.

    selectNumber = function () {
        return 10;
    };

    return selectNumber();

    selectNumber = function () {
        return 30;
    };

};
geFirstNumber(); // 10



///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////EXAMPLE FOURTH WITH LOAD ORDER //////////////
///////////////////////////////////////////////////////////////////////////////////////

function geFirstNumber() {
    return selectNumber();

    var selectNumber = function () {
        return 10;
    };



    var selectNumber = function () {
        return 30;
    };
};
geFirstNumber(); // !!!! ERROR !!!!!!

/////////////////////////////////////////////////
///////////!!!LOAD ORDER IN MEMORY///////////////
/////////////////////////////////////////////////

function geFirstNumber() {

    var selectNumber = undefined;
    var selectNumber = undefined;
    return selectNumber();

    selectNumber = function () {
        return 30;
    };
    selectNumber = function () {
        return 30;
    };
};
geFirstNumber(); // !!!! ERROR !!!!!!



//////////////////////////////////////////////////////////////////
////////////////////// HOISTING PROBLEM////////////////////
//////////////////////////////////////////////////////////////////

function testHoisting(input, output){

    if (input == output){
        return outputAreEqual();
    }
    else{
        return outputNotEqual();
    };

    var outputAreEqual = function (){
        alert('outputAreEqual');
    };

    var outputNotEqual = function (){
        alert('outputNotEqual');
    }
};
testHoisting(60, 60); // TypeError: selectNumber is not a function


/////////////////////////////////////////////////
///////////!!!LOAD ORDER IN MEMORY///////////////
/////////////////////////////////////////////////

function testHoisting(input, output){

    var outputAreEqual = undefined;
    var outputNotEqual = undefined;
    if (input == output){
        return outputAreEqual();
    }
    else{
        return outputNotEqual();
    };

     outputAreEqual = function (){
        alert('outputAreEqual');
    };

     outputNotEqual = function (){
        alert('outputNotEqual');
    }
};
testHoisting(60, 60);


//////////////////////////////////////////////////////////////////
////////////////////// HOISTING SOLUTION ONE of ABOVE PROBLEM/////
//////////////////////////////////////////////////////////////////

function testHoisting(input, output){

    var outputAreEqual = function (){
        alert('outputAreEqual');
    };

    var outputNotEqual = function (){
        alert('outputNotEqual');
    }

    if (input == output){
        return outputAreEqual();
    }
    else{
        return outputNotEqual();
    };


};
testHoisting(60, 60); //


//////////////////////////////////////////////////////////////////
////////////////////// HOISTING SOLUTION TWO of ABOVE PROBLEM/////
//////////////////////////////////////////////////////////////////

function testHoisting(input, output){

    if (input == output){
        return outputAreEqual();
    }
    else{
        return outputNotEqual();
    };

    function outputAreEqual (){
        alert('outputAreEqual');
    };

    function outputNotEqual(){
        alert('outputNotEqual');
    }
};
testHoisting(60, 60); //