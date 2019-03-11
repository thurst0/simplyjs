


define(['app/services'], function (services) {
    var self = {}

    self.init = function() {
        var controller = {}
        setTimeout(function(){
            rivets.bind($('#header'), {userid:services.userid,controller:controller})
        }, '100')
    }

    return self
});