var person = {
firstName: "default",
lastName:"default",
bothName:function(){
    
    return this.firstName + this.lastName;
}
}
var john = {
    firstName:"John",
    lastName:"Doe",
oneName:function(){
return this.lastName + this.lastName;
}
}

var jane = {
    firstName:"jane",
    lastName:"jing",

}
//dont do this. Practice purpose



john.__proto__ = person;

jane.__proto__ = john;


console.log("john",john);
console.log("jane",jane);
console.log(john.bothName());
console.log(jane.oneName());


var a = {};
var b = [];
var c = function(){

};


