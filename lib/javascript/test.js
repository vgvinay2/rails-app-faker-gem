var fun = function () {
    var count = arguments.length;
    var sum = 0;
    for (var i = 0; i < count; i += 1) {
        sum += arguments[i];
    };
    return sum;
};
fun(2, 3, 4, 5, 5);
fun(2, 3, 5);
////////////////////////////////////////////////
////////////////////////////////////////////////

var my_obj = {}

my_obj.name = 'Vinay'
my_obj.address = 'Bangalore'
console.log(my_obj)
console.log(window)


////////////////////////////////////////////////
////////////////////////////////////////////////

var my_obj = {
    'first_name': 'Vinay',
    'last_name': 'Gupta',
    'mobile_number': {
        'home_mobile': 9412566109,
        'personal_number': 8867165476,
        'official_number': 88671543667
    },
    'address': {
        'city': 'Bangalore',
        'street': 'Roopeana Agaraha'
    }
};
console.log(my_obj);
console.log(my_obj.first_name);
console.log(my_obj.mobile_number.personal_number);
console.log(my_obj.address.city);
// The || operator can be used to fill in default values:
// Attempting to retrieve values from undefined will throw a TypeError exception. This
// can be guarded against with the && operator:
console.log(my_obj.address && my_obj.address.room_num && my_obj.address.room_num.er) || 'Sorry Dude';



////////////////////////////////////////////////
////////////////////////////////////////////////


function TestFunction(name, city, duration, marks){
        this.name = name,
        this.city = city,
        this.duration = duration,
        this.marks = marks

};

var testfunction  = new TestFunction('JavaScript', 'Bangalore', '1 Hours', '5');
testfunction();
console.log(testfunction.name)
console.log(testfunction.setName)

TestFunction.setGlobalName = 'John';
TestFunction.prototype.setName = 'Johny';


TestFunction.setGlobalName