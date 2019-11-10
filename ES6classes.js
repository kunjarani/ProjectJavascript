class Person {
    constructor (f,l){
        this.first = f;
        this.last = l;
    }
    greet (){
        return f + l;
    }
}

var kunja = new Person("Kunja","Rani");

console.log("kunja",kunja);

//setting protype tp person

class InformalPerson extends Person {
    constructor (f,l){
        super(f,l);
        this.first = f;
        this.last = l;
    }
    greet (){
        return f + l;
    }
}

var saru = new InformalPerson("saru","devi");

console.log("saru",saru);

