//define(function () {
 require(['jspdf'], function(jspdf) {
    var parms = {}
    var todos = [
        {done:true, summary:"List 1"}
        , {done:false, summary:"List 2"}
    ]
 
    var controller = {
        removeItem: function(e, model) {
            console.log(model)
        },
        addItem: function(){

        },printList: function(){
            var pdf = new jspdf()
            pdf.fromHTML($('#todos').get(0), 15, 15)
            pdf.save('a4.pdf')//pdf.output("dataurlnewwindow")
        }
    }

    function $id(id) {
        return document.getElementById(id);
    }
    setTimeout(function(){
        rivets.bind($('#todos'), {todo:todos,controller:controller})
    }, '100')
    return {
       
    };
});