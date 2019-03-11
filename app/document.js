
define([], function () {
    var self = {}
    
    self.loggedIn = true
    self.userid = 'th'

    self.$id = function(id) {
        return document.getElementById(id);
    }

    return self
});