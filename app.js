var person = new Object();
person["firstname"]="kunja";
 var secondName = "Rani";
 person["secondName"] = secondName;
 person.address = new Object();
 console.log("",person);
 person.address["city"]="bangalore";
 person.address.pincode = 560100;
 var state = "karnataka";
 var states = "staterr"
 person.address[states]=state;

 console.log("person",person);

