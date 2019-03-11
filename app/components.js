
define(['rivets'], function (rivets) {
    var self = {}
    self.init = function(){
        rivets.components['todo-item'] = {
            // Return the template for the component.
            template: function() {
                return '<input type="checkbox" rv-checked="todo.complete">'
                    + '{data.item.summary}'
                    + '<button rv-on-click="add">Reset description</button>'
            },
        
            // Takes the original element and the data that was passed into the
            // component (either from rivets.init or the attributes on the component
            // element in the template).
            initialize: function(el, data) {
                console.log(data)
                return new ItemController(data)
            }
        }
    }

    function ItemController(data) {
        this.data = data
        this.add = function (event, scope) {
            console.log(scope)
            scope.data.item.summary = scope.data.default
        };
    }
    return self
});
