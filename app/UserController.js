// define(function () {
define(['app/services', 'app/header'],function (services, header) {
    var self = {}
    var controller = {
        setName : function(e, model) {
            user.realname = model.user.name
            services.userid = model.user.name
            header.init()
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
    self.init = function(p){
        parms = p
        setTimeout(function(){
            if(parms.name){user.name = parms.name}
            rivets.bind($('#user'), {user: user, controller:controller}); 
        }, '100')
        // services.getData('asdf').then(function(data){
        //     console.log(data)
        // }, function(error) {
        //     console.log(error)
        // })
    }

    return self
});