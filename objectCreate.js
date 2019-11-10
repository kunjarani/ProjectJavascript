var person = {
first : "kunja",
last:"Rani",
fullName: function(){
    return this.first + this.last;
}


};

var jaemy  = Object.create(person);

//jaemy is a empty object and its prototype contains all the person data.
console.log("jaemy",jaemy);

// overriding the person values 
jaemy.first = "jacab";

console.log("jaemy",jaemy);


