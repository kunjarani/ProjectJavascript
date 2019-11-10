var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {name:"kunja",lastanme:"rani"};
console.log(typeof c);
console.log(c.toString() );
var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));



function Person(l,n){
this.last = l;
this.first = n;
}
 var e = new Person("kunja","rani");


 console.log( e instanceof Person);

