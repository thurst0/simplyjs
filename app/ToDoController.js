// //define(function () {
//  require(['jspdf'], function(jspdf) {
define(['app/services', 'jspdf', 'app/header'],function (services, jspdf, header) {
    var self = {}
    var parms = {}

    var controller = {
        removeItem: function(e, model) {
            console.log(model)
        },
        addItem: function(){

        }
        ,printList: function(){
            var pdf = new jspdf()
            pdf.fromHTML($('#todos').get(0), 15, 15)
            pdf.save('a4.pdf')//pdf.output("dataurlnewwindow")
        }
    }

    function $id(id) {
        return document.getElementById(id);
    }
    
    self.init = function(p){
        parms = p
        setTimeout(function(){
            header.init()
            services.getData('todos').then(function(data){
                rivets.bind($('#todos'), {todo:data,controller:controller})
            })
        }, '100')
    }


    return self
});