// define(function () {
define(['app/services', 'aggrid','app/grid', 'bootstrap', 'app/document'],function (services, aggrid, grid, bootstrap, d) {
    var self = {}
    var data = {msg:"test"}
    var controller = {}
    grid.columnDefs = [
        {headerName: "Make", field: "make",sortable: true, filter: true},
        {headerName: "Model", field: "model",sortable: true, filter: true},
        {headerName: "(Price)", field: "price",sortable: true, filter: true, editable:true}
    ];
    grid.options = {columnDefs: grid.columnDefs, rowSelection:'multiple'}
    var parms = {}
   
    self.init = function(p){
        parms = p
        setTimeout(function(){
            $('.alert').alert()
            initGrid()
            rivets.bind($('#griddemo'), {data:data, controller:controller});  
        }, '100')
    }
    getSelectedRows = function(){
        var selectedNodes = grid.options.api.getSelectedNodes()  
        var selectedData = selectedNodes.map( function(node) { return node.data })
        var selectedDataStringPresentation = selectedData.map( function(node) { return node.make + ' ' + node.model }).join(', ')
        data.msg = 'Selected nodes: ' + selectedDataStringPresentation
       // alert('Selected nodes: ' + selectedDataStringPresentation);
        $(".alert").show()
    }

    function initGrid(){
        grid.div = d.$id('myGrid')
        new aggrid.Grid(grid.div, grid.options);
        loadData()
    }
    function loadData(){
        services.getData('demo1').then(function(data){
            grid.options.rowData = data
            grid.options.api.setRowData(data);
        }, function(error) {
            console.log(error)

        })
    }
    return self
});