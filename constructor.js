function Girls(f,l){
    this.first = f;
    this.last = l;
  
   
};

var kunja = new Girls("kunja","rani");

console.log("girls",kunja);

Girls.prototype.getFullName = function() {
    return this.last + this.first ;
};


var saru = new Girls("saru","barri");


console.log("saru",saru);
