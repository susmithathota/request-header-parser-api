var express=require('express');
var app=express();

app.get('/',function(req,res){
    var ip= req.headers['x-forwarded-for'];
    
    var resultObj={
        'ip-address':ip,
        'language': req.headers['accept-language'].split(',')[0],
        'software':req.headers['user-agent'].split(') ')[0].split('(')[1]
    };
    
    
    res.send(resultObj);
});

app.listen(8080,function(){
    console.log('ex running at 8080');
})