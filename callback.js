function tellMeWhenDone(status,callback){
    if(status === 'success'){
        var a = 200; //some code
        callback(a);
    }
   
    if(status === 'error'){
        var b = 404; //some code
        callback(b);
    }
}

tellMeWhenDone('success',function(data){
    alert("success",data);
});

tellMeWhenDone('error',function(data){
    alert("failure",data);
})