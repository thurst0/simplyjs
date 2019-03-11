// //define(function () {
//  require(['jspdf'], function(jspdf) {
define(['app/services', 'jspdf'],function (services, jspdf) {
    var self = {}
    var parms = {}
    // var todos = [
    //     {complete:true, summary:"List 1"}
    //     , {complete:false, summary:"List 2"}
    // ]
 
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
        console.log(services)
        setTimeout(function(){
            services.getData('todos').then(function(data){
                rivets.bind($('#todos'), {todo:data,controller:controller})
            })
        }, '100')
    }

    // $(document).ready(function(){
    //   console.log('ready')
    //  });

    return self
});