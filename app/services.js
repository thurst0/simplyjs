
define([], function () {
    var self = {}
    
    self.loggedIn = true
    self.userid = 'th'

    self.getData = function(ep){
        return new Promise(function(resolve, reject) {
            var data
            if(ep == 'todos'){
                data = [{rowid:1, summary:'Bar', complete:false, default:"some default text for bar"},{rowid:2, summary:'Foo', complete:true, default:"some default text for foo"}]
                resolve(data)
            }else if(ep == 'demo'){
                data = [
                    {make: "Toyota", model: "Celica", price: 33000},
                    {make: "Ford", model: "Mondeo", price: 32000},
                    {make: "Porsche", model: "Boxter", price: 72000},
                    {make: "Volvo", model: "Sedan", price: 72000}
                ]
                resolve(data)
            }else if (ep == 'demo1'){
                fetch('https://api.myjson.com/bins/ly7d1').then(function(response) {
                    return response.json();
                  }).then(function(data) {
                    resolve(data)
                  })
            }else{
                reject(-1)
            }
        })
    }

    return self
});