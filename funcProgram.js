var arr=[1, 2, 3,4];


//fn is a callback
function checkFuncProgram (arr , fn){
    var arr1=[];
    for (let i=0; i< arr.length; i++){

        arr1.push(fn(arr[i]));
    }


return arr1;

}

var checkFp =  checkFuncProgram(arr,function(p1){
    console.log("comming");
   return  p1 * 2;
  
})
var checkFp1 =  checkFuncProgram(arr,function(p1){
    console.log("comming");
   return  p1 > 2;
  
});
var checkGreater = function(p1,p2){
    return  p1 < p2;
}
 var checkFp2 = checkFuncProgram(arr,checkGreater.bind(this,2));

 

 var checkGreaterSimplified =function(v1){
return function(v1,p2){
    return  v1 < p2;
}.bind(this,v1);
 }
  
var checkFp3 = checkFuncProgram(arr,checkGreaterSimplified(2));
console.log(checkFp,"checkFp");
console.log(checkFp1,"checkFp1");
console.log(checkFp2,"checkFp2");
console.log(checkFp3,"checkFp3");

var checkFp4 = _.map(arr ,function(num){
return num > 2;
});
console.log(checkFp4,"checkFp4");