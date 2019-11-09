var bindObj = {
name:"Kunja",
lastName:"Barri",
fullName:function(){

    console.log("full Name",this.name, this.lastName);
    return this.name + this.lastName;
}

}
var bindObj2 = {
    name:"Sarada",
    lastName:"Barru",
    
    }
    



//bind 
function checkingBind(l1 ,l2){

    console.log("fullName func",this.fullName());

    // console.log("arguments",arguments);
     console.log("l1",l1);
     console.log("l2",l2);

     return l1*l2;


}

// 4 having defined in bind is function currying
var checkBind=checkingBind.bind(bindObj,4);
//console.log("answer-----------------",checkBind(2,3));

 //call apply
checkingBind.call(bindObj,8,6);
checkingBind.apply(bindObj,[7,8]);



//anonomous function on fly with call
(function (l1 ,l2){

    console.log("fullName func",this.fullName());


     console.log("l1",l1);
     console.log("l2",l2);
  

}).call(bindObj,20,30);

// function borrowing

//var newBorrowCheck = bindObj.fullName.call(bindObj2);

//console.log("newBorrowCheck",newBorrowCheck);