
define([], function () {
    var self = {}

    self.$id = function(id) {
        return document.getElementById(id);
    }

    return self
});