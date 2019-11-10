var person = {
    firstName: "default",
    lastName:"default",
    bothName:function(){
        
        return this.firstName + this.lastName;
    }
    }

    var persons = [
         "default",
        {lastName:"default"},
        function(){
            
            return this.firstName + this.lastName;
        }
    ]
    var john = {
        firstName:"John",
        lastName:"Doe"
    
    }

    
    //john.__proto__ = person;


    for (var p in john){
        if(john.hasOwnProperty(p)){
            console.log("p",p,john[p]);
        }
        
    }

    for (var k = 0; k<persons.length;k++ ){
        console.log("k",k,persons[k]);
    }

    var jane = {
       lowestName:function(){
        return this.firstName + this.lastName;
       }
    
    }
    var jim = {
        address:"neeladriNagar",
        fullname : function(){
            return firstName;
        }
    
    }
_.extend(john,jane,jim);

console.log(john);