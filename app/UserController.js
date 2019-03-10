// define(function () {
require([], function() {
    var controller = {
        setName : function(e, model) {
            console.log(model.user.name)
            user.realname = model.user.name
        }
    }

    var parms = {name:""}
   
    var user = {
        'name' : 'Sahil Gupta',
        'about' : '<span>About Me</span>',
        'enabled' : true,
        'validate' : function(){
          user.enabled = false;
          console.log("validated")
        }
    }
    setTimeout(function(){
        console.log(parms)
        if(parms.name){user.name = parms.name}
        rivets.bind($('#user'), {user: user, controller:controller}); 
    }, '100')
    return{}
});